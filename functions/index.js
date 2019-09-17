'use strict';

// const functions = require('firebase-functions');
// const gcs = require('@google-cloud/storage')();
// // const {Storage} = require('@google-cloud/storage'); const gcs = new Storage();
const admin = require('firebase-admin');
admin.initializeApp()
const spawn = require('child-process-promise').spawn;
const mkdirp = require('mkdirp-promise');
const path = require('path');
const os = require('os');
const fs = require('fs');

// THUMBNAILS
import * as functions from 'firebase-functions';
import * as Storage from '@google-cloud/storage';
const gcs = Storage();
import { tmpdir } from 'os';
import { join, dirname } from 'path';
import * as sharp from 'sharp';
import * as fs from 'fs-extra';



// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from olajide pedigree!");
// });







export const generateThumbs = functions.storage
    .object()
    .onFinalize(async object => {
        const bucket = gcs.bucket(object.bucket);
        const filePath = object.name;
        const fileName = filePath.split('/').pop();
        const bucketDir = dirname(filePath);
        const workingDir = join(tmpdir(), 'thumbs');
        const tmpFilePath = join(workingDir, 'source.png');
        if (fileName.includes('thumb@') || !object.contentType.includes('image')) {
            console.log('exiting function');
            return false;
        }
        // 1. Ensure thumbnail dir exists
        await fs.ensureDir(workingDir);
        // 2. Download Source File
        await bucket.file(filePath).download({
            destination: tmpFilePath
        });
        // 3. Resize the images and define an array of upload promises
        const sizes = [64, 128, 256];
        const uploadPromises = sizes.map(async size => {
            const thumbName = `thumb@${ size } _${ fileName }`;
            const thumbPath = join(workingDir, thumbName);
            // Resize source image
            await sharp(tmpFilePath)
                .resize(size, size)
                .toFile(thumbPath);
            // Upload to GCS
            return bucket.upload(thumbPath, {
                destination: join(bucketDir, thumbName)
            });
        });
        // 4. Run the upload operations
        await Promise.all(uploadPromises);
        // 5. Cleanup remove the tmp/thumbs from the filesystem
        return fs.remove(workingDir).then(()=>{
            return fs.remove(bucketDir)
        });

        // where bucketDir is : const bucketDir = path.dirname(filePath)
    });


    // IMAGE TO THUMBNAIL

// // [START import]
// const functions = require('firebase-functions');
// const admin = require('firebase-admin');
// admin.initializeApp()
// const spawn = require('child-process-promise').spawn;
// const path = require('path');
// const os = require('os');
// const fs = require('fs');
// // [END import]

// [START generateThumbnail]
/**
 * When an image is uploaded in the Storage bucket We generate a thumbnail automatically using
 * ImageMagick.
 */
// [START generateThumbnailTrigger]
// exports.generateThumbnail = functions.storage.object().onFinalize(async (object) => {
//     // [END generateThumbnailTrigger]
//     // [START eventAttributes]
//     const fileBucket = object.bucket; // The Storage bucket that contains the file.
//     const filePath = object.name; // File path in the bucket.
//     const contentType = object.contentType; // File content type.
//     const metageneration = object.metageneration; // Number of times metadata has been generated. New objects have a value of 1.
//     // [END eventAttributes]

//     // [START stopConditions]
//     // Exit if this is triggered on a file that is not an image.
//     if (!contentType.startsWith('image/')) {
//         return console.log('This is not an image.');
//     }

//     // Get the file name.
//     const fileName = path.basename(filePath);
//     // Exit if the image is already a thumbnail.
//     if (fileName.startsWith('thumb_')) {
//         return console.log('Already a Thumbnail.');
//     }
//     // [END stopConditions]

//     // [START thumbnailGeneration]
//     // Download file from bucket.
//     const bucket = admin.storage().bucket(fileBucket);
//     const tempFilePath = path.join(os.tmpdir(), fileName);
//     const metadata = {
//         contentType: contentType,
//     };
//     await bucket.file(filePath).download({
//         destination: tempFilePath
//     });
//     console.log('Image downloaded locally to', tempFilePath);
//     // Generate a thumbnail using ImageMagick.
//     await spawn('convert', [tempFilePath, '-thumbnail', '200x200>', tempFilePath]);
//     console.log('Thumbnail created at', tempFilePath);
//     // We add a 'thumb_' prefix to thumbnails file name. That's where we'll upload the thumbnail.
//     const thumbFileName = `thumb_${fileName}`;
//     const thumbFilePath = path.join(path.dirname(filePath), thumbFileName);
//     // Uploading the thumbnail.
//     await bucket.upload(tempFilePath, {
//         destination: thumbFilePath,
//         metadata: metadata,
//     });
//     // Once the thumbnail has been uploaded delete the local file to free up disk space.
//     return fs.unlinkSync(tempFilePath);
//     // [END thumbnailGeneration]
// });
// // [END generateThumbnail]







    // // IMAGE OPTIMIZATION

// exports.optimizeImages = functions.storage.object().onChange(({
//     data
// }) => {
//     // File and directory paths.
//     const filePath = data.name;
//     const tempLocalFile = path.join(os.tmpdir(), filePath);
//     const tempLocalDir = path.dirname(tempLocalFile);


//     // Exit if this is triggered on a file that is not an image.
//     if (!data.contentType.startsWith('image/')) {
//         console.log('This is not an image.');
//         return null;
//     }

//     // Exit if this is a move or deletion event.
//     if (data.resourceState === 'not_exists') {
//         console.log('This is a deletion event.');
//         return null;
//     }

//     // Exit if file exists but is not new and is only being triggered
//     // because of a metadata change.
//     if (data.resourceState === 'exists' && data.metageneration > 1) {
//         console.log('This is a metadata change event.');
//         return null;
//     }

//     // Cloud Storage files.
//     const bucket = gcs.bucket(data.bucket);
//     const file = bucket.file(filePath);

//     return file.getMetadata()
//         .then(([metadata]) => {
//             if (metadata.metadata && metadata.metadata.optimized) {
//                 return Promise.reject('Image has been already optimized');
//             }
//             return Promise.resolve();
//         })
//         .then(() => mkdirp(tempLocalDir))
//         .then(() => file.download({
//             destination: tempLocalFile
//         }))
//         .then(() => {
//             console.log('The file has been downloaded to', tempLocalFile);
//             // Generate a thumbnail using ImageMagick.
//             return spawn('convert', [tempLocalFile, '-strip', '-interlace', 'Plane', '-quality', '82', tempLocalFile]);
//         })
//         .then(() => {
//             console.log('Optimized image created at', tempLocalFile);
//             // Uploading the Optimized image.
//             return bucket.upload(tempLocalFile, {
//                 destination: file,
//                 metadata: {
//                     metadata: {
//                         optimized: true
//                     }
//                 }
//             });
//         })
//         .then(() => {
//             console.log('Optimized image uploaded to Storage at', file);
//             // Once the image has been uploaded delete the local files to free up disk space.
//             fs.unlinkSync(tempLocalFile);

//             // Get the Signed URLs for optimized image.
//             const config = {
//                 action: 'read',
//                 expires: '03-01-2500'
//             };
//             return file.getSignedUrl(config);
//         });
// });







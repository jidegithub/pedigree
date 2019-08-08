import React from 'react'

const FileInput = (props) => {
    return (
        <input type="file" className="form-control" {...props} />
    );
}

export default FileInput;
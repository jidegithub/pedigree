import React from 'react'

export default function SliderItem() {
    return (
        <div class="card">
            <div class="card-image">
                <figure class="image is-4by3">
                <img src="https://versions.bulma.io/0.7.1/images/placeholders/1280x960.png" alt="Placeholder image"/>>
                </figure>
            </div>
            <div class="card-content">
                <footer class="card-footer">
                    <p class="card-footer-item">
                    <span>
                        View on <a href="https://twitter.com/codinghorror/status/506010907021828096">Twitter</a>
                    </span>
                    </p>
                    <p class="card-footer-item">
                    <span>
                        Share on <a href="#">Facebook</a>
                    </span>
                    </p>
                </footer>
            </div>
        </div>
    )
}

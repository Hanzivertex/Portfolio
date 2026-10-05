# Hanzi Vertex Digital — Portfolio

Premium GitHub Pages portfolio for Hanzi Vertex Digital.

## 1. Add the six videos

Put these files in `assets/videos/` using these exact filenames:

- `CLONE-SKIT-HVD.mp4`
- `FFPVB.mp4`
- `MITO-AI.mp4`
- `REPIT.mp4`
- `SHORT-VID-15.mp4`
- `GL1-ES.mp4`

### Original filenames → website filenames

| Your file | Website filename |
|---|---|
| CLONE SKIT HVD.mov | CLONE-SKIT-HVD.mp4 |
| FFPVB.mp4 | FFPVB.mp4 |
| MITO AI.mp4 | MITO-AI.mp4 |
| REPIT.mp4 | REPIT.mp4 |
| Short VID 15.mp4 | SHORT-VID-15.mp4 |
| GL1 ES.mp4 | GL1-ES.mp4 |

If your hero video is still `.mov`, convert it to `.mp4` first for the broadest browser support.

## 2. GitHub Pages

1. Create a repository named `Portfolio` under `Hanzivertex`.
2. Upload the contents of this folder to the repository root.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select `main` and `/ (root)`.
6. Save.

Your site should publish at:
`https://hanzivertex.github.io/Portfolio/`

## Important: GitHub video size

GitHub repositories are not ideal for large video files. If a video is too large for normal GitHub uploads, host the videos on a video/CDN service and replace each `<source src="...">` URL in `index.html` with the hosted MP4 URL.

For best performance, encode social reels as H.264 MP4, 1080×1920, with a reasonable bitrate.

## Contact details already configured

Email: hanzivertexdigital@gmail.com
WhatsApp: +971 55 123 5599
Instagram: https://www.instagram.com/hanzivertex.digital/

## Customization

All styling is in `css/style.css`.
Interactive behavior is in `js/script.js`.


## Video hosting
The six portfolio videos are hosted on Cloudinary, so you do **not** need to upload the large video files to GitHub. The website already contains the public Cloudinary delivery URLs.

## Presenter credit
Creatora Studio is credited in the hero as **Presented by Creatora Studio** and in the footer as **Hanzi Vertex × Creatora Studio**. The presenter badge links to `@creatora_studio` on Instagram.

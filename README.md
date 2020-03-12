# https://democracy-deutschland.de

## contributing

```
git clone https://github.com/demokratie-live/democracy-website
cd democracy-website
```

run your local php server

duplicate `config.dist.php` in root folder and name it `config.php`
setting up your `config.php`

import mysql structure from `democracy_website.sql` into your database

```

```

### convert videos

mp4
`ffmpeg -i DDW-List.mp4 -filter:v "crop=540:1080:0:0" -an -b:v 0 -crf 25 -f mp4 -vcodec libx264 -pix_fmt yuv420p  DDW-List_croped.mp4 -y`

`ffmpeg -i DDW-List.mp4 -filter:v "crop=540:1080:0:0" -an -c vp9 -b:v 0 -crf 41  DDW-List_croped.webm -y`
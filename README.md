# https://democracy-deutschland.de

## contributing

```
git clone https://github.com/demokratie-live/democracy-website
cd democracy-website
```

The clone contains the complete code including the PHP framework, there are no Git submodules
(see [framework code](#framework-code)).

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

## framework code

The PHP framework and its modules used to be Git submodules from
[webcraftmedia](https://github.com/webcraftmedia). They are part of this repository now and
are changed here directly:

| path | origin | imported commit | commit in this repository |
| --- | --- | --- | --- |
| `lib/system` | [webcraftmedia/system](https://github.com/webcraftmedia/system) | `1bd0c36` | `0013dac` |
| `lib/mail_cannon` | [webcraftmedia/lib_mail_cannon](https://github.com/webcraftmedia/lib_mail_cannon) | `f5ad05b` | `37480bd` |
| `democracy/sai/saimod_mail` | [webcraftmedia/saimod_mail](https://github.com/webcraftmedia/saimod_mail) | `4018599` | `07f9b13` |

Their history was imported too and moved into these paths, so `git log` and `git blame` work
on the files. The commit IDs differ from the original repositories, the table maps the imported
state. The original repositories have newer commits that were not taken over.

`lib/system` itself included libraries and its documentation as submodules. They were imported
as plain files, without their history:

<details>
<summary>imported libraries</summary>

| path | origin | commit |
| --- | --- | --- |
| `lib/system/docu/system` | [webcraftmedia/docu_system](https://github.com/webcraftmedia/docu_system) | `e1b78be` |
| `lib/system/docu/system_wiki` | [webcraftmedia/system.wiki](https://github.com/webcraftmedia/system.wiki) | `66ca232` |
| `lib/system/lib/animate` | [webcraftmedia/lib_animate](https://github.com/webcraftmedia/lib_animate) | `6dd8080` |
| `lib/system/lib/bootstrap` | [webcraftmedia/lib_bootstrap](https://github.com/webcraftmedia/lib_bootstrap) | `792823f` |
| `lib/system/lib/bootstrap_growl` | [webcraftmedia/lib_bootstrap_growl](https://github.com/webcraftmedia/lib_bootstrap_growl) | `b674508` |
| `lib/system/lib/font_awesome` | [webcraftmedia/lib_font_awesome](https://github.com/webcraftmedia/lib_font_awesome) | `bd0fdef` |
| `lib/system/lib/font_awesome/lib` | [FortAwesome/Font-Awesome](https://github.com/FortAwesome/Font-Awesome) | `d8db3d0` |
| `lib/system/lib/git` | [webcraftmedia/lib_git](https://github.com/webcraftmedia/lib_git) | `0372a2f` |
| `lib/system/lib/jqbootstrapvalidation` | [webcraftmedia/lib_jqbootstrapvalidation](https://github.com/webcraftmedia/lib_jqbootstrapvalidation) | `ff0ae20` |
| `lib/system/lib/jquery` | [webcraftmedia/lib_jquery](https://github.com/webcraftmedia/lib_jquery) | `b6c56b2` |
| `lib/system/lib/jstree` | [webcraftmedia/lib_jstree](https://github.com/webcraftmedia/lib_jstree) | `b567c89` |
| `lib/system/lib/jstree/lib/jstree` | [vakata/jstree](https://github.com/vakata/jstree) | `56530b6` |
| `lib/system/lib/lettering` | [webcraftmedia/lib_lettering](https://github.com/webcraftmedia/lib_lettering) | `0d964b1` |
| `lib/system/lib/markdown` | [webcraftmedia/lib_markdown](https://github.com/webcraftmedia/lib_markdown) | `868bad8` |
| `lib/system/lib/markdown/lib` | [michelf/php-markdown](https://github.com/michelf/php-markdown) | `e1aabe1` |
| `lib/system/lib/minify` | [webcraftmedia/lib_minify](https://github.com/webcraftmedia/lib_minify) | `1e4a4f1` |
| `lib/system/lib/phpdoc_md` | [webcraftmedia/lib_phpdoc_md](https://github.com/webcraftmedia/lib_phpdoc_md) | `90f5f1d` |
| `lib/system/lib/phpdoc_md/lib/phpdoc_md` | [evert/phpdoc-md](https://github.com/evert/phpdoc-md) | `5bb8b36` |
| `lib/system/lib/phpdoc_md/lib/twig` | [fabpot/Twig](https://github.com/fabpot/Twig) | `555937c` |
| `lib/system/lib/phpdocumentor` | [webcraftmedia/lib_phpdocumentor](https://github.com/webcraftmedia/lib_phpdocumentor) | `56561aa` |
| `lib/system/lib/popper` | [webcraftmedia/lib_popper](https://github.com/webcraftmedia/lib_popper) | `35a3448` |
| `lib/system/lib/scssphp` | [webcraftmedia/lib_scssphp](https://github.com/webcraftmedia/lib_scssphp) | `a83e62e` |
| `lib/system/lib/scssphp/lib` | [leafo/scssphp](https://github.com/leafo/scssphp) | `b9cdea3` |
| `lib/system/lib/tablesorter` | [webcraftmedia/lib_tablesorter](https://github.com/webcraftmedia/lib_tablesorter) | `2492c3e` |
| `lib/system/lib/textillate` | [webcraftmedia/lib_textillate](https://github.com/webcraftmedia/lib_textillate) | `aab326a` |
| `lib/system/lib/tinymce` | [webcraftmedia/lib_tinymce](https://github.com/webcraftmedia/lib_tinymce) | `48460ac` |

</details>

The `.gitmodules` files inside `lib/system` come from the original repositories and have no
effect.

### updating an existing clone

A clone that still has the submodules checked out can't pull this change directly, git refuses
to overwrite the submodule directories. Save local changes inside the submodules first, then:

```
git submodule deinit --all -f
git pull
rm -rf .git/modules
```

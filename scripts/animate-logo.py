"""Build an animated copy of the crest SVG for the loading screen.

Blue outline draws itself in, then the green, red and black details appear.
Final state is the plain logo, so reduced-motion (animations off) shows it as-is.

Usage: python3 scripts/animate-logo.py public/images/logo.svg public/images/logo-animated.svg
"""
import re, sys

src, dst = sys.argv[1], sys.argv[2]
svg = open(src).read()

classes = {"#007DCD": "b", "#3FAE00": "g", "#CD0000": "r", "#000000": "k"}

def tag_group(m):
    fill = m.group(1)
    cls = classes[fill]
    body = m.group(2)
    if cls == "b":
        body = body.replace("<path ", '<path pathLength="1" ')
    return f'<g class="{cls}" fill="{fill}">{body}</g>'

svg, n = re.subn(r'<g fill="(#[0-9A-F]{6})">(.*?)</g>', tag_group, svg, flags=re.S)
assert n == 4, n

style = """<style>
.all{transform-box:view-box;transform-origin:50% 50%;animation:breathe 2.4s ease-in-out 1.8s infinite}
.b path{stroke:#007DCD;stroke-width:10;stroke-dasharray:1;animation:draw 1.1s cubic-bezier(.6,0,.3,1) both,fillin .5s ease .8s both}
.g,.r,.k{transform-box:fill-box;transform-origin:50% 50%}
.g{animation:pop .5s cubic-bezier(.3,1.4,.5,1) 1s both}
.r{animation:pop .5s cubic-bezier(.3,1.4,.5,1) 1.15s both}
.k{animation:fade .5s ease 1.3s both}
@keyframes draw{from{stroke-dashoffset:1}to{stroke-dashoffset:0}}
@keyframes fillin{from{fill-opacity:0;stroke-opacity:1}to{fill-opacity:1;stroke-opacity:0}}
@keyframes pop{from{opacity:0;transform:scale(.6)}to{opacity:1;transform:scale(1)}}
@keyframes fade{from{opacity:0}to{opacity:1}}
@keyframes breathe{0%,100%{transform:scale(1)}50%{transform:scale(1.03)}}
@media (prefers-reduced-motion:reduce){*{animation:none!important}.b path{stroke:none}}
</style>"""

svg = re.sub(r'(<svg[^>]*>)', lambda m: m.group(1) + style + '<g class="all">', svg, count=1)
svg = svg.replace('</svg>', '</g></svg>')
open(dst, 'w').write(svg)
print("wrote", dst, len(svg))

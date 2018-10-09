<template>
	<div ref='page'  class="lt-full zmiti-index-main-ui "   :class="{'show':show}" >

		<div class="zmiti-index-page lt-full"  ref='page'>
		
			<svg width="960" height="600"><g></g><g transform="translate(480,300)scale(1.0020877122879028,1.0020877122879028)"><text text-anchor="middle" transform="translate(-124,139)rotate(-30)" style="font-size: 100px; font-family: Impact; fill: rgb(57, 59, 121);">word</text><text text-anchor="middle" transform="translate(-193,97)rotate(-30)" style="font-size: 91px; font-family: Impact; fill: rgb(82, 84, 163);">words</text><text text-anchor="middle" transform="translate(195,-136)rotate(60)" style="font-size: 86px; font-family: Impact; fill: rgb(107, 110, 207);">sprite</text><text text-anchor="middle" transform="translate(-139,-30)rotate(-30)" style="font-size: 72px; font-family: Impact; fill: rgb(156, 158, 222);">placed</text><text text-anchor="middle" transform="translate(64,-133)rotate(0)" style="font-size: 64px; font-family: Impact; fill: rgb(99, 121, 57);">area</text>
    <text text-anchor="middle" transform="translate(-294,-18)rotate(-30)" style="font-size: 64px; font-family: Impact; fill: rgb(140, 162,82);">algorithm</text><text text-anchor="middle" transform="translate(-20,-90)rotate(60)" style="font-size: 64px; font-family: Impact; fill: rgb(181, 207, 107);">layout</text><text text-anchor="middle" transform="translate(83,-74)rotate(60)" style="font-size: 52px; font-family: Impact; fill: rgb(206, 219, 156);">step</text><text text-anchor="middle" transform="translate(-11,19)rotate(0)" style="font-size: 52px; font-family: Impact; fill: rgb(140, 109, 49);">retrieve</text><text text-anchor="middle" transform="translate(210,66)rotate(60)" style="font-size: 52px; font-family: Impact; fill: rgb(189, 158, 57);">collision</text><text text-anchor="middle" transform="translate(-36,-180)rotate(-30)" style="font-size: 52px; font-family: Impact; fill: rgb(231, 186, 82);">candidate</text>
    <text text-anchor="middle" transform="translate(156,-5)rotate(-60)" style="font-size: 52px; font-family: Impact; fill: rgb(231, 203, 148);">without</text><text text-anchor="middle" transform="translate(-350,144)rotate(-60)" style="font-size: 52px; font-family: Impact; fill: rgb(132, 60, 57);">bounding</text><text text-anchor="middle" transform="translate(143,142)rotate(-60)" style="font-size: 52px; font-family: Impact; fill: rgb(173, 73, 74);">operation</text><text text-anchor="middle" transform="translate(-168,-111)rotate(30)" style="font-size: 37px; font-family: Impact; fill: rgb(214, 97, 107);">move</text>
    <text text-anchor="middle" transform="translate(32,85)rotate(0)" style="font-size: 37px; font-family: Impact; fill: rgb(231, 150, 156);">perform</text><text text-anchor="middle" transform="translate(324,-77)rotate(-60)" style="font-size: 37px; font-family: Impact; fill: rgb(123, 65, 115);">hierarchical</text><text text-anchor="middle" transform="translate(206,-20)rotate(60)" style="font-size: 37px; font-family: Impact; fill: rgb(165, 81, 148);">time</text><text text-anchor="middle" transform="translate(-34,-30)rotate(30)" style="font-size: 37px; font-family: Impact; fill: rgb(206, 109, 189);">32</text><text text-anchor="middle" transform="translate(-230,-13)rotate(-60)" style="font-size: 37px; font-family: Impact; fill: rgb(222, 158, 214);"></text><text text-anchor="middle" transform="translate(-230,-131)rotate(-30)" style="font-size: 37px; font-family: Impact; fill: rgb(57, 59, 121);">draw</text>
    <text text-anchor="middle" transform="translate(318,19)rotate(-30)" style="font-size: 37px; font-family: Impact; fill: rgb(82, 84, 163);">possible</text><text text-anchor="middle" transform="translate(113,-207)rotate(-60)" style="font-size: 37px; font-family: Impact; fill: rgb(107, 110, 207);">data</text>
    <text text-anchor="middle" transform="translate(-186,-164)rotate(30)" style="font-size: 37px; font-family: Impact; fill: rgb(156, 158, 222);">pixel</text><text text-anchor="middle" transform="translate(350,54)rotate(-30)" style="font-size: 37px; font-family: Impact; fill: rgb(99, 121, 57);">expensive</text>
    <text text-anchor="middle" transform="translate(236,-204)rotate(60)" style="font-size: 37px; font-family: Impact; fill: rgb(140, 162, 82);">pixels</text><text text-anchor="middle" transform="translate(-17,174)rotate(-60)" style="font-size: 37px; font-family: Impact; fill: rgb(181, 207, 107);">placement</text>
    <text text-anchor="middle" transform="translate(-115,171)rotate(-30)" style="font-size: 37px; font-family: Impact; fill: rgb(206, 219, 156);">masks</text><text text-anchor="middle" transform="translate(-319,-102)rotate(30)" style="font-size: 37px; font-family: Impact; fill: rgb(140, 109, 49);">even</text>
    <text text-anchor="middle" transform="translate(365,-177)rotate(0)" style="font-size: 37px; font-family: Impact; fill: rgb(189, 158, 57);">detection</text><text text-anchor="middle" transform="translate(-373,-87)rotate(60)" style="font-size: 37px; font-family: Impact; fill: rgb(231, 186, 82);">simple</text>
    <text text-anchor="middle" transform="translate(76,131)rotate(-30)" style="font-size: 37px; font-family: Impact; fill: rgb(231, 203, 148);">larger</text><text text-anchor="middle" transform="translate(206,126)rotate(60)" style="font-size: 37px; font-family: Impact; fill: rgb(132, 60, 57);">whole</text>
    <text text-anchor="middle" transform="translate(-333,-180)rotate(60)" style="font-size: 37px; font-family: Impact; fill: rgb(173, 73, 74);">starting</text><text text-anchor="middle" transform="translate(-209,-209)rotate(-30)" style="font-size: 37px; font-family: Impact; fill: rgb(214, 97, 107);">comparing</text>
    <text text-anchor="middle" transform="translate(-56,-226)rotate(-30)" style="font-size: 37px; font-family: Impact; fill: rgb(231, 150, 156);">previously</text><text text-anchor="middle" transform="translate(172,-98)rotate(0)" style="font-size: 37px; font-family: Impact; fill: rgb(123, 65, 115);">box</text>
    <text text-anchor="middle" transform="translate(-40,145)rotate(-60)" style="font-size: 37px; font-family: Impact; fill: rgb(165, 81, 148);">large</text><text text-anchor="middle" transform="translate(-5,50)rotate(0)" style="font-size: 37px; font-family: Impact; fill: rgb(206, 109, 189);">think</text><text text-anchor="middle" transform="translate(-271,-246)rotate(0)" style="font-size: 37px; font-family: Impact; fill: rgb(222, 158, 214);">version</text><text text-anchor="middle" transform="translate(174,179)rotate(60)" style="font-size: 37px; font-family: Impact; fill: rgb(57, 59, 121);">single</text>
    <text text-anchor="middle" transform="translate(-272,27)rotate(30)" style="font-size: 37px; font-family: Impact; fill: rgb(82, 84, 163);">tree</text><text text-anchor="middle" transform="translate(-307,202)rotate(-30)" style="font-size: 37px; font-family: Impact; fill: rgb(107, 110, 207);">separately</text>
    <text text-anchor="middle" transform="translate(-65,-48)rotate(0)" style="font-size: 10px; font-family: Impact; fill: rgb(156, 158, 222);">always</text><text text-anchor="middle" transform="translate(-25,-75)rotate(-30)" style="font-size: 10px; font-family: Impact; fill: rgb(99, 121, 57);">use</text><text text-anchor="middle" transform="translate(158,37)rotate(-30)" style="font-size: 10px; font-family: Impact; fill: rgb(140, 162, 82);">overlap</text><text text-anchor="middle" transform="translate(52,98)rotate(0)" style="font-size: 10px; font-family: Impact; fill: rgb(181, 207, 107);">animations</text><text text-anchor="middle" transform="translate(-69,-130)rotate(30)" style="font-size: 10px; font-family: Impact; fill: rgb(206, 219, 156);">prevents</text><text text-anchor="middle" transform="translate(115,-103)rotate(60)" style="font-size: 10px; font-family: Impact; fill: rgb(140, 109, 49);">browsers</text>
    <text text-anchor="middle" transform="translate(-55,-59)rotate(0)" style="font-size: 10px; font-family: Impact; fill: rgb(189, 158, 57);">event</text><text text-anchor="middle" transform="translate(-39,-87)rotate(-30)" style="font-size: 10px; font-family: Impact; fill: rgb(231, 186, 82);">loop</text><text text-anchor="middle" transform="translate(-150,-197)rotate(60)" style="font-size: 10px; font-family: Impact; fill: rgb(231, 203, 148);">blocking</text><text text-anchor="middle" transform="translate(99,-14)rotate(-60)" style="font-size: 10px; font-family: Impact; fill: rgb(132, 60, 57);">placing</text>
    <text text-anchor="middle" transform="translate(71,-41)rotate(-60)" style="font-size: 10px; font-family: Impact; fill: rgb(173, 73, 74);">incredibly</text><text text-anchor="middle" transform="translate(49,-82)rotate(30)" style="font-size: 10px; font-family: Impact; fill: rgb(214, 97, 107);">available</text><text text-anchor="middle" transform="translate(53,-112)rotate(-60)" style="font-size: 10px; font-family: Impact; fill: rgb(231, 150, 156);">GitHub</text><text text-anchor="middle" transform="translate(296,113)rotate(30)" style="font-size: 10px; font-family: Impact; fill: rgb(123, 65, 115);">important</text><text text-anchor="middle" transform="translate(-104,181)rotate(-30)" style="font-size: 10px; font-family: Impact; fill: rgb(165, 81, 148);">Attempt</text><text text-anchor="middle" transform="translate(135,-180)rotate(-30)" style="font-size: 10px; font-family: Impact; fill: rgb(206, 109, 189);">place</text>
    <text text-anchor="middle" transform="translate(250,14)rotate(30)" style="font-size: 10px; font-family: Impact; fill: rgb(222, 158, 214);">point</text><text text-anchor="middle" transform="translate(-171,-72)rotate(-30)" style="font-size: 10px; font-family: Impact; fill: rgb(57, 59, 121);">usually</text><text text-anchor="middle" transform="translate(165,11)rotate(60)" style="font-size: 10px; font-family: Impact; fill: rgb(82, 84, 163);">near</text><text text-anchor="middle" transform="translate(-68,-28)rotate(-30)" style="font-size: 10px; font-family: Impact; fill: rgb(107, 110, 207);">middle</text><text text-anchor="middle" transform="translate(47,-195)rotate(-30)" style="font-size: 10px; font-family: Impact; fill: rgb(156, 158, 222);">somewhere</text><text text-anchor="middle" transform="translate(63,38)rotate(30)" style="font-size: 10px; font-family: Impact; fill: rgb(99, 121, 57);">central</text>
    <text text-anchor="middle" transform="translate(55,-252)rotate(60)" style="font-size: 10px; font-family: Impact; fill: rgb(140, 162, 82);">horizontal</text><text text-anchor="middle" transform="translate(-91,-28)rotate(-30)" style="font-size: 10px; font-family: Impact; fill: rgb(181, 207, 107);">line</text><text text-anchor="middle" transform="translate(193,131)rotate(60)" style="font-size: 10px; font-family: Impact; fill: rgb(206, 219, 156);">intersects</text><text text-anchor="middle" transform="translate(-106,-33)rotate(-60)" style="font-size: 10px; font-family: Impact; fill: rgb(140, 109, 49);">open</text><text text-anchor="middle" transform="translate(-281,62)rotate(30)" style="font-size: 10px; font-family: Impact; fill: rgb(189, 158, 57);">source</text><text text-anchor="middle" transform="translate(126,74)rotate(0)" style="font-size: 10px; font-family: Impact; fill: rgb(231, 186, 82);">one</text>
    <text text-anchor="middle" transform="translate(17,152)rotate(60)" style="font-size: 10px; font-family: Impact; fill: rgb(231, 203, 148);">along</text><text text-anchor="middle" transform="translate(-207,30)rotate(-30)" style="font-size: 10px; font-family: Impact; fill: rgb(132, 60, 57);">increasing</text><text text-anchor="middle" transform="translate(-106,-112)rotate(-60)" style="font-size: 10px; font-family: Impact; fill: rgb(173, 73, 74);">spiral</text><text text-anchor="middle" transform="translate(284,59)rotate(-30)" style="font-size: 10px; font-family: Impact; fill: rgb(214, 97, 107);">Repeat</text><text text-anchor="middle" transform="translate(-335,37)rotate(-60)" style="font-size: 10px; font-family: Impact; fill: rgb(231, 150, 156);">intersections</text><text text-anchor="middle" transform="translate(253,-31)rotate(-30)" style="font-size: 10px; font-family: Impact; fill: rgb(123, 65, 115);">found</text>
    <text text-anchor="middle" transform="translate(172,-142)rotate(30)" style="font-size: 10px; font-family: Impact; fill: rgb(165, 81, 148);">hard</text><text text-anchor="middle" transform="translate(141,-81)rotate(-60)" style="font-size: 10px; font-family: Impact; fill: rgb(206, 109, 189);">part</text><text text-anchor="middle" transform="translate(123,-195)rotate(-60)" style="font-size: 10px; font-family: Impact; fill: rgb(222, 158, 214);">making</text><text text-anchor="middle" transform="translate(-145,-5)rotate(-30)" style="font-size: 10px; font-family: Impact; fill: rgb(57, 59, 121);">license</text><text text-anchor="middle" transform="translate(59,160)rotate(-30)" style="font-size: 10px; font-family: Impact; fill: rgb(82, 84, 163);">efficiently</text><text text-anchor="middle" transform="translate(-126,-251)rotate(60)" style="font-size: 10px; font-family: Impact; fill: rgb(107, 110, 207);">According</text>
    <text text-anchor="middle" transform="translate(150,167)rotate(60)" style="font-size: 10px; font-family: Impact; fill: rgb(156, 158, 222);">Jonathan</text><text text-anchor="middle" transform="translate(225,174)rotate(0)" style="font-size: 10px; font-family: Impact; fill: rgb(99, 121, 57);">Feinberg</text>
    <text text-anchor="middle" transform="translate(319,-32)rotate(-60)" style="font-size: 10px; font-family: Impact; fill: rgb(140, 162, 82);">Wordle</text><text text-anchor="middle" transform="translate(-60,-107)rotate(60)" style="font-size: 10px; font-family: Impact; fill: rgb(181, 207, 107);">uses</text><text text-anchor="middle" transform="translate(28,184)rotate(30)" style="font-size: 10px; font-family: Impact; fill: rgb(206, 219, 156);">combination</text><text text-anchor="middle" transform="translate(344,-65)rotate(-30)" style="font-size: 10px; font-family: Impact; fill: rgb(140, 109, 49);">d3cloud</text>
    <text text-anchor="middle" transform="translate(84,-26)rotate(-60)" style="font-size: 10px; font-family: Impact; fill: rgb(189, 158, 57);">Note</text><text text-anchor="middle" transform="translate(-296,35)rotate(-60)" style="font-size: 10px; font-family: Impact; fill: rgb(231, 186, 82);">boxes</text><text text-anchor="middle" transform="translate(295,-150)rotate(30)" style="font-size: 10px; font-family: Impact; fill: rgb(231, 203, 148);">quadtrees</text><text text-anchor="middle" transform="translate(-377,-47)rotate(0)" style="font-size: 10px; font-family: Impact; fill: rgb(132, 60, 57);">achieve</text><text text-anchor="middle" transform="translate(61,-267)rotate(60)" style="font-size: 10px; font-family: Impact; fill: rgb(173, 73, 74);">reasonable</text><text text-anchor="middle" transform="translate(-186,-100)rotate(60)" style="font-size: 10px; font-family: Impact; fill: rgb(214, 97, 107);">speeds</text>
    <text text-anchor="middle" transform="translate(-264,-8)rotate(30)" style="font-size: 10px; font-family: Impact; fill: rgb(231, 150, 156);">Glyphs</text><text text-anchor="middle" transform="translate(366,-35)rotate(30)" style="font-size: 10px; font-family: Impact; fill: rgb(123, 65, 115);">JavaScript</text><text text-anchor="middle" transform="translate(-268,45)rotate(-60)" style="font-size: 10px; font-family: Impact; fill: rgb(165, 81, 148);">isnt</text><text text-anchor="middle" transform="translate(95,138)rotate(-30)" style="font-size: 10px; font-family: Impact; fill: rgb(206, 109, 189);">way</text><text text-anchor="middle" transform="translate(273,154)rotate(-30)" style="font-size: 10px; font-family: Impact; fill: rgb(222, 158, 214);">code</text><text text-anchor="middle" transform="translate(61,57)rotate(0)" style="font-size: 10px; font-family: Impact; fill: rgb(57, 59, 121);">precise</text>
    <text text-anchor="middle" transform="translate(225,-57)rotate(60)" style="font-size: 10px; font-family: Impact; fill: rgb(82, 84, 163);">glyph</text><text text-anchor="middle" transform="translate(-303,10)rotate(-60)" style="font-size: 10px; font-family: Impact; fill: rgb(107, 110, 207);">shapes</text><text text-anchor="middle" transform="translate(-19,-63)rotate(30)" style="font-size: 10px; font-family: Impact; fill: rgb(156, 158, 222);">via</text><text text-anchor="middle" transform="translate(213,-69)rotate(-30)" style="font-size: 10px; font-family: Impact; fill: rgb(99, 121, 57);">DOM</text>
    <text text-anchor="middle" transform="translate(291,-126)rotate(30)" style="font-size: 10px; font-family: Impact; fill: rgb(140, 162, 82);">except</text><text text-anchor="middle" transform="translate(-4,193)rotate(60)" style="font-size: 10px; font-family: Impact; fill: rgb(181, 207, 107);">perhaps</text><text text-anchor="middle" transform="translate(-61,121)rotate(-60)" style="font-size: 10px; font-family: Impact; fill: rgb(206, 219, 156);">SVG</text><text text-anchor="middle" transform="translate(306,102)rotate(30)" style="font-size: 10px; font-family: Impact; fill: rgb(140, 109, 49);">fonts</text><text text-anchor="middle" transform="translate(142,-250)rotate(60)" style="font-size: 10px; font-family: Impact; fill: rgb(189, 158, 57);">Instead</text><text text-anchor="middle" transform="translate(129,-115)rotate(30)" style="font-size: 10px; font-family: Impact; fill: rgb(231, 186, 82);">text</text>
    <text text-anchor="middle" transform="translate(24,202)rotate(30)" style="font-size: 10px; font-family: Impact; fill: rgb(231, 203, 148);">hidden</text><text text-anchor="middle" transform="translate(322,34)rotate(-30)" style="font-size: 10px; font-family: Impact; fill: rgb(132, 60, 57);">canvas</text><text text-anchor="middle" transform="translate(311,-166)rotate(0)" style="font-size: 10px; font-family: Impact; fill: rgb(173, 73, 74);">element</text><text text-anchor="middle" transform="translate(358,-94)rotate(-30)" style="font-size: 10px; font-family: Impact; fill: rgb(214, 97, 107);">rendering</text>
    <text text-anchor="middle" transform="translate(-162,-184)rotate(30)" style="font-size: 10px; font-family: Impact; fill: rgb(231, 150, 156);">final</text><text text-anchor="middle" transform="translate(-193,198)rotate(0)" style="font-size: 10px; font-family: Impact; fill: rgb(123, 65, 115);">Retrieving</text>
    <text text-anchor="middle" transform="translate(-333,-155)rotate(60)" style="font-size: 10px; font-family: Impact; fill: rgb(165, 81, 148);">output</text><text text-anchor="middle" transform="translate(-223,-117)rotate(-30)" style="font-size: 10px; font-family: Impact; fill: rgb(206, 109, 189);">requires</text><text text-anchor="middle" transform="translate(59,181)rotate(60)" style="font-size: 10px; font-family: Impact; fill: rgb(222, 158, 214);">many</text><text text-anchor="middle" transform="translate(-6,225)rotate(30)" style="font-size: 10px; font-family: Impact; fill: rgb(57, 59, 121);">additional</text>
    <text text-anchor="middle" transform="translate(338,80)rotate(0)" style="font-size: 10px; font-family: Impact; fill: rgb(82, 84, 163);">batch</text><text text-anchor="middle" transform="translate(379,-59)rotate(60)" style="font-size: 10px; font-family: Impact; fill: rgb(107, 110, 207);">development</text><text text-anchor="middle" transform="translate(-319,149)rotate(30)" style="font-size: 10px; font-family: Impact; fill: rgb(156, 158, 222);">Sprites</text><text text-anchor="middle" transform="translate(-130,-217)rotate(-30)" style="font-size: 10px; font-family: Impact; fill: rgb(99, 121, 57);">block</text>
    <text text-anchor="middle" transform="translate(-76,191)rotate(30)" style="font-size: 10px; font-family: Impact; fill: rgb(140, 162, 82);">initial</text><text text-anchor="middle" transform="translate(-232,182)rotate(-30)" style="font-size: 10px; font-family: Impact; fill: rgb(181, 207, 107);">quite</text><text text-anchor="middle" transform="translate(-103,-267)rotate(30)" style="font-size: 10px; font-family: Impact; fill: rgb(206, 219, 156);">performed</text><text text-anchor="middle" transform="translate(336,91)rotate(0)" style="font-size: 10px; font-family: Impact; fill: rgb(140, 109, 49);">slow</text><text text-anchor="middle" transform="translate(104,-250)rotate(0)" style="font-size: 10px; font-family: Impact; fill: rgb(189, 158, 57);">hundred</text><text text-anchor="middle" transform="translate(-184,-203)rotate(0)" style="font-size: 10px; font-family: Impact; fill: rgb(231, 186, 82);">using</text>
    <text text-anchor="middle" transform="translate(-101,93)rotate(60)" style="font-size: 10px; font-family: Impact; fill: rgb(231, 203, 148);">run</text><text text-anchor="middle" transform="translate(58,-180)rotate(0)" style="font-size: 10px; font-family: Impact; fill: rgb(132, 60, 57);">doesnt</text><text text-anchor="middle" transform="translate(231,185)rotate(0)" style="font-size: 10px; font-family: Impact; fill: rgb(173, 73, 74);">copy</text><text text-anchor="middle" transform="translate(-56,-283)rotate(0)" style="font-size: 10px; font-family: Impact; fill: rgb(214, 97, 107);">appropriate</text><text text-anchor="middle" transform="translate(-379,58)rotate(60)" style="font-size: 10px; font-family: Impact; fill: rgb(231, 150, 156);">position</text><text text-anchor="middle" transform="translate(125,-272)rotate(0)" style="font-size: 10px; font-family: Impact; fill: rgb(123, 65, 115);">asynchronously</text>
    <text text-anchor="middle" transform="translate(-390,103)rotate(-60)" style="font-size: 10px; font-family: Impact; fill: rgb(165, 81, 148);">representing</text><text text-anchor="middle" transform="translate(-366,-177)rotate(-60)" style="font-size: 10px; font-family: Impact; fill: rgb(206, 109, 189);">configurable</text><text text-anchor="middle" transform="translate(78,164)rotate(-30)" style="font-size: 10px; font-family: Impact; fill: rgb(222, 158, 214);">Cloud</text><text text-anchor="middle" transform="translate(-413,66)rotate(60)" style="font-size: 10px; font-family: Impact; fill: rgb(57, 59, 121);">advantage</text><text text-anchor="middle" transform="translate(6,-178)rotate(-60)" style="font-size: 10px; font-family: Impact; fill: rgb(82, 84, 163);">involves</text><text text-anchor="middle" transform="translate(-128,214)rotate(30)" style="font-size: 10px; font-family: Impact; fill: rgb(107, 110, 207);">positioning</text>
    <text text-anchor="middle" transform="translate(141,59)rotate(0)" style="font-size: 10px; font-family: Impact; fill: rgb(156, 158, 222);">size</text><text text-anchor="middle" transform="translate(101,-261)rotate(0)" style="font-size: 10px; font-family: Impact; fill: rgb(99, 121, 57);">relevant</text><text text-anchor="middle" transform="translate(-251,54)rotate(0)" style="font-size: 10px; font-family: Impact; fill: rgb(140, 162, 82);">rather</text><text text-anchor="middle" transform="translate(142,201)rotate(0)" style="font-size: 10px; font-family: Impact; fill: rgb(181, 207, 107);">previous</text><text text-anchor="middle" transform="translate(-85,223)rotate(-60)" style="font-size: 10px; font-family: Impact; fill: rgb(206, 219, 156);">Somewhat</text><text text-anchor="middle" transform="translate(-399,-77)rotate(30)" style="font-size: 10px; font-family: Impact; fill: rgb(140, 109, 49);">surprisingly</text>
    <text text-anchor="middle" transform="translate(263,-229)rotate(60)" style="font-size: 10px; font-family: Impact; fill: rgb(189, 158, 57);">lowlevel</text><text text-anchor="middle" transform="translate(209,-93)rotate(-60)" style="font-size: 10px; font-family: Impact; fill: rgb(231, 186, 82);">hack</text><text text-anchor="middle" transform="translate(47,114)rotate(-30)" style="font-size: 10px; font-family: Impact; fill: rgb(231, 203, 148);">made</text><text text-anchor="middle" transform="translate(332,133)rotate(-30)" style="font-size: 10px; font-family: Impact; fill: rgb(132, 60, 57);">tremendous</text><text text-anchor="middle" transform="translate(-163,219)rotate(30)" style="font-size: 10px; font-family: Impact; fill: rgb(173, 73, 74);">difference</text><text text-anchor="middle" transform="translate(-409,-23)rotate(-30)" style="font-size: 10px; font-family: Impact; fill: rgb(214, 97, 107);">constructing</text>
    <text text-anchor="middle" transform="translate(-13,237)rotate(30)" style="font-size: 10px; font-family: Impact; fill: rgb(231, 150, 156);">compressed</text><text text-anchor="middle" transform="translate(-226,-175)rotate(-60)" style="font-size: 10px; font-family: Impact; fill: rgb(123, 65, 115);">blocks</text><text text-anchor="middle" transform="translate(-115,-9)rotate(0)" style="font-size: 10px; font-family: Impact; fill: rgb(165, 81, 148);">1bit</text><text text-anchor="middle" transform="translate(105,79)rotate(60)" style="font-size: 10px; font-family: Impact; fill: rgb(206, 109, 189);">32bit</text><text text-anchor="middle" transform="translate(-242,-31)rotate(-30)" style="font-size: 10px; font-family: Impact; fill: rgb(222, 158, 214);">integers</text><text text-anchor="middle" transform="translate(142,186)rotate(-30)" style="font-size: 10px; font-family: Impact; fill: rgb(57, 59, 121);">thus</text>
    <text text-anchor="middle" transform="translate(391,-76)rotate(60)" style="font-size: 10px; font-family: Impact; fill: rgb(82, 84, 163);">reducing</text><text text-anchor="middle" transform="translate(-264,-163)rotate(-30)" style="font-size: 10px; font-family: Impact; fill: rgb(107, 110, 207);">number</text><text text-anchor="middle" transform="translate(362,66)rotate(0)" style="font-size: 10px; font-family: Impact; fill: rgb(156, 158, 222);">checks</text><text text-anchor="middle" transform="translate(179,-126)rotate(0)" style="font-size: 10px; font-family: Impact; fill: rgb(99, 121, 57);">memory</text>
    <text text-anchor="middle" transform="translate(53,236)rotate(0)" style="font-size: 10px; font-family: Impact; fill: rgb(140, 162, 82);">times</text><text text-anchor="middle" transform="translate(-360,40)rotate(-30)" style="font-size: 10px; font-family: Impact; fill: rgb(181, 207, 107);">fact</text><text text-anchor="middle" transform="translate(31,-272)rotate(-60)" style="font-size: 10px; font-family: Impact; fill: rgb(206, 219, 156);">turned</text><text text-anchor="middle" transform="translate(33,-116)rotate(-30)" style="font-size: 10px; font-family: Impact; fill: rgb(140, 109, 49);">beat</text>
    <text text-anchor="middle" transform="translate(390,62)rotate(60)" style="font-size: 10px; font-family: Impact; fill: rgb(189, 158, 57);">makes</text><text text-anchor="middle" transform="translate(131,226)rotate(30)" style="font-size: 10px; font-family: Impact; fill: rgb(231, 186, 82);">quadtree</text><text text-anchor="middle" transform="translate(-33,255)rotate(60)" style="font-size: 10px; font-family: Impact; fill: rgb(231, 203, 148);">everything</text><text text-anchor="middle" transform="translate(73,-217)rotate(0)" style="font-size: 10px; font-family: Impact; fill: rgb(132, 60, 57);">tried</text><text text-anchor="middle" transform="translate(-415,-53)rotate(-60)" style="font-size: 10px; font-family: Impact; fill: rgb(173, 73, 74);">Generator</text><text text-anchor="middle" transform="translate(173,209)rotate(60)" style="font-size: 10px; font-family: Impact; fill: rgb(214, 97, 107);">areas</text>
    <text text-anchor="middle" transform="translate(-306,-74)rotate(-30)" style="font-size: 10px; font-family: Impact; fill: rgb(231, 150, 156);">font</text><text text-anchor="middle" transform="translate(261,182)rotate(-60)" style="font-size: 10px; font-family: Impact; fill: rgb(123, 65, 115);">sizes</text><text text-anchor="middle" transform="translate(287,-227)rotate(60)" style="font-size: 10px; font-family: Impact; fill: rgb(165, 81, 148);">animate</text><text text-anchor="middle" transform="translate(-244,198)rotate(0)" style="font-size: 10px; font-family: Impact; fill: rgb(206, 109, 189);">primarily</text><text text-anchor="middle" transform="translate(-328,167)rotate(-60)" style="font-size: 10px; font-family: Impact; fill: rgb(222, 158, 214);">Works</text><text text-anchor="middle" transform="translate(-53,53)rotate(60)" style="font-size: 10px; font-family: Impact; fill: rgb(57, 59, 121);">needs</text>
    <text text-anchor="middle" transform="translate(307,163)rotate(-30)" style="font-size: 10px; font-family: Impact; fill: rgb(82, 84, 163);">stuttering</text><text text-anchor="middle" transform="translate(-101,200)rotate(60)" style="font-size: 10px; font-family: Impact; fill: rgb(107, 110, 207);">test</text><text text-anchor="middle" transform="translate(-15,100)rotate(-30)" style="font-size: 10px; font-family: Impact; fill: rgb(156, 158, 222);">per</text><text text-anchor="middle" transform="translate(411,-4)rotate(60)" style="font-size: 10px; font-family: Impact; fill: rgb(99, 121, 57);">whereas</text>
    <text text-anchor="middle" transform="translate(-447,50)rotate(30)" style="font-size: 10px; font-family: Impact; fill: rgb(140, 162, 82);">compare</text><text text-anchor="middle" transform="translate(105,237)rotate(60)" style="font-size: 10px; font-family: Impact; fill: rgb(181, 207, 107);">every</text><text text-anchor="middle" transform="translate(320,170)rotate(-30)" style="font-size: 10px; font-family: Impact; fill: rgb(206, 219, 156);">overlaps</text><text text-anchor="middle" transform="translate(-214,211)rotate(0)" style="font-size: 10px; font-family: Impact; fill: rgb(140, 109, 49);">slightly</text>
    <text text-anchor="middle" transform="translate(229,212)rotate(-60)" style="font-size: 10px; font-family: Impact; fill: rgb(189, 158, 57);">Another</text><text text-anchor="middle" transform="translate(-437,86)rotate(30)" style="font-size: 10px; font-family: Impact; fill: rgb(231, 186, 82);">possibility</text><text text-anchor="middle" transform="translate(32,255)rotate(-60)" style="font-size: 10px; font-family: Impact; fill: rgb(231, 203, 148);">merge</text><text text-anchor="middle" transform="translate(107,259)rotate(0)" style="font-size: 10px; font-family: Impact; fill: rgb(132, 60, 57);">recommended</text><text text-anchor="middle" transform="translate(292,-107)rotate(0)" style="font-size: 10px; font-family: Impact; fill: rgb(173, 73, 74);">fairly</text><text text-anchor="middle" transform="translate(364,113)rotate(30)" style="font-size: 10px; font-family: Impact; fill: rgb(214, 97, 107);">though</text>
    <text text-anchor="middle" transform="translate(-353,-164)rotate(-60)" style="font-size: 10px; font-family: Impact; fill: rgb(231, 150, 156);">compared</text><text text-anchor="middle" transform="translate(-173,236)rotate(30)" style="font-size: 10px; font-family: Impact; fill: rgb(123, 65, 115);">analagous</text><text text-anchor="middle" transform="translate(371,-117)rotate(0)" style="font-size: 10px; font-family: Impact; fill: rgb(165, 81, 148);">mask</text><text text-anchor="middle" transform="translate(413,63)rotate(60)" style="font-size: 10px; font-family: Impact; fill: rgb(206, 109, 189);">essentially</text><text text-anchor="middle" transform="translate(409,-35)rotate(60)" style="font-size: 10px; font-family: Impact; fill: rgb(222, 158, 214);">ORing</text><text text-anchor="middle" transform="translate(267,204)rotate(-60)" style="font-size: 10px; font-family: Impact; fill: rgb(57, 59, 121);">converting</text></g></svg>
		</div>
	</div>
</template>

<script>
	import './index.css';
	import {imgs} from '../lib/assets.js';
	import {zmitiUtil} from '../lib/util';
	import Point from './point';
	import '../lib/html2canvas'
	export default {
		props:['obserable','nickname','pv'],
		name:'zmitiindex',
		data(){
			return{
				imgs,
				pointW:0,
				showSubmit:true,
				transY:0,
				pointH:0,
				points:[],
				showStartBtn:false,
				index:-1,
				showOthers:true,
				showRemark:false,
				organizationArr:window.organizationArr,
				showLight:false,
				starting:false,
				planeClass:'',
				show:true,
				maxHeight:80,
				showjiasu:false,
				showIndexMask:false,
				viewW:Math.min(window.innerWidth,750),
				viewH:window.innerHeight
			}
		},
		components:{
		},
		
		methods:{

			

			imgStart(e){
				e.preventDefault(); 
			},
			setSize(){
				var canvas = this.$refs['canvas'];
				canvas.width = this.viewW;
				canvas.height = this.viewH;

				var canvas1 = this.$refs['rocket'];
				canvas1.width = this.viewW;
				canvas1.height = this.viewH;
				return canvas;
			},
			start(){
				this.starting = true;

				this.showStartBtn = false;
				
				this.showOthers = false;
				this.planeLeave();
			},
			html2img(){
				var s = this;
				this.showBtns = false;

				//zmitiUtil.wxConfig('我是第'+(s.pv)+'位种树者',window.desc)
				var {obserable} = this;
				setTimeout(()=>{
					var ref = 'page';
					var dom = this.$refs[ref];
					html2canvas(dom,{
						useCORS: true,
						onrendered: function(canvas) {
					        var url =  canvas.toDataURL('image/jpg');
							console.log(url);

							 s.createImg = url;
							 
							 return
							
					        $.ajax({
					          //url: window.protocol+'//api.zmiti.com/v2/share/base64_image/',
					          url:window.protocol+'//'+window.server+'.zmiti.com/v2/share/base64_image/',
					          type: 'post',
					          data: {
					            setcontents: url,
					            setwidth: dom.clientWidth,
					            setheight:dom.clientHeight
					          },
					          error(){
					          },
					          success: function(data) {
					          	//alert('data.getret =>'+data.getret)
					            if (data.getret === 0) {
					            	//s.deleteImg(dt.img);


					            	s.canShare = true;//可以分享了
					               var src = data.getimageurl;
					             
	
									var url = window.location.href.split('#')[0];

									url = zmitiUtil.changeURLPar(url,'src',src);
									url = zmitiUtil.changeURLPar(url,'num',s.pv);
									zmitiUtil.wxConfig('我是第'+(s.pv)+'位种树者',window.desc,url)
								       
					            }else{
					            }

					          }
					        })

					      },
					      width: dom.clientWidth,
					      height:dom.clientHeight
					})
				},1000)
			}
			  
		},
		mounted(){

			var {obserable} = this;

			this.html2img();

			obserable.on('toggleIndex',(data)=>{
				this.show = data.show;
			})

			obserable.on('hideIndexSubmitBg',data=>{
				this.showSubmit = data;
				this.starting = !data;
			})



		}
	}
</script>
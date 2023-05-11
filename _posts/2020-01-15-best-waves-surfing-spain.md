---
layout: post
title:  "Best Waves - Surfing In Spain"
date:   2020-01-15
featured_image: surfing.jpg
tags: [Tips, Surfing, Travel]
---
kwa kutumia tag za **template** ya **Django**  tuna taka kutenge ne zewa  `url` hasa ukizinga tia **Django** anatarajia **URL** kwenye `blog/urls.py` ambayo **inaitwa** **"name"** = `post_detail` ndiyo maana hapo kati sikuacha kuioyesha `post_detail`  namalizia na `pk=post.pk` **funguo yamsingi** nilisha izungumzia wakati tuna tengeneza **muonekano** siyo kazi kujua kwanini nime iweka hapo 
```html
<div class="row">
{% for post in posts %}

   <div class="col-md-4">
        <div class="card mb-2">

            <img class="card-img-top" src="{{ post.cover.url}}" class="img-fluid img-thumbnail" alt="{{ post.title }}">
            <div class="card-body">
                <h5 class="card-title">{{ post.title }}</h5>
                <p class="card-text">{{ post.text | slice:":40" }}</p>

                <a href="{% url 'post_detail' pk=post.pk %}" 
                   class="btn btn-success">
                    Soma zaidi
                </a>

            </div>
        </div>
    </div>
    {% endfor %}
</div>
{% endblock %}
``` 
**post_detail.html** 


**Surfing** is a surface water sport in which the wave rider, referred to as a surfer, rides on the forward or deep face of a moving wave, which is usually carrying the surfer towards the shore. Waves suitable for surfing are primarily found in the ocean, but can also be found in lakes or in rivers in the form of a standing wave or tidal bore. However, surfers can also utilize artificial waves such as those from boat wakes and the waves created in artificial wave pools.

>"Your surfing can get better on every turn, on every wave you catch. Learn to read the ocean better. A big part of my success has been wave knowledge." <cite>Kelly Slater</cite>

Synchronised surfing, Manly Beach, New South Wales, 1938–46 The term surfing refers to the act of riding a wave, regardless of whether the wave is ridden with a board or without a board, and regardless of the stance used. The native peoples of the Pacific, for instance, surfed waves on alaia, paipo, and other such craft, and did so on their belly and knees. The modern-day definition of surfing, however, most often refers to a surfer riding a wave standing up on a surfboard; this is also referred to as stand-up surfing.

<!--more-->

<iframe src="https://player.vimeo.com/video/31830780" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
<p><a href="https://vimeo.com/31830780">Hey Ho Let&#039;s Go Surfing</a> from <a href="https://vimeo.com/nathanoldfield">Nathan Oldfield</a> on <a href="https://vimeo.com">Vimeo</a>.</p>

Another prominent form of surfing is body boarding, when a surfer rides a wave on a bodyboard, either lying on their belly, drop knee, or sometimes even standing up on a body board. Other types of surfing include knee boarding, surf matting (riding inflatable mats), and using foils. Body surfing, where the wave is surfed without a board, using the surfer's own body to catch and ride the wave, is very common and is considered by some to be the purest form of surfing.

{% include image_full.html imageurl="/images/posts/surfing-spain.jpg" title="Surfing" caption="Evening at the ocean" %}

Three major subdivisions within standing-up surfing are long boarding and short boarding and these two have several major differences, including the board design and length, the riding style, and the kind of wave that is ridden.

In tow-in surfing (most often, but not exclusively, associated with big wave surfing), a motorized water vehicle, such as a personal watercraft, tows the surfer into the wave front, helping the surfer match a large wave's speed, which is generally a higher speed than a self-propelled surfer can produce. Surfing-related sports such as paddle boarding and sea kayaking do not require waves, and other derivative sports such as kite surfing and windsurfing rely primarily on wind for power, yet all of these platforms may also be used to ride waves. Recently with the use of V-drive boats, Wakesurfing, in which one surfs on the wake of a boat, has emerged. The Guinness Book of World Records recognized a 78 feet (23.8 m) wave ride by Garrett McNamara at Nazaré, Portugal as the largest wave ever surfed, although this remains an issue of much contention amongst many surfers, given the difficulty of measuring a constantly changing mound of water

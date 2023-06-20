<template>
    <main>
        <header>
            <nuxt-link class="" to="/"></nuxt-link>
        </header>
        <section class="base-section">
            <div class="center">
                <div class="hero">
                    <div class="hero__info">
                        <h1 class="hero__title">Hi, I'm Seidgy.</h1>
                        <h2 class="hero__subtitle">An Interfaces Developer @ <a href="https://www.ccmdesign.ca/" target="_blank">CCMDESIGN</a></h2>
                        <h2 class="hero__subtitle">And a UX Researcher @ <a href="https://www.pelando.com.br/" target="_blank">Pelando</a></h2>
                        <span class="spacer"></span>
                        <p> I love coding animated, responsive, and dynamic web pages, always mindful of accessibility and striving for the best possible interaction by trying to understand what motivate and concern my users.</p>
                        <social-media></social-media>
                        <img src="/images/circular-logo.svg" alt="Circular logo" class="hero__logo | rotate-me" aria-hidden="true" />
                    </div>
                    <div class="hero__picture-container">
                        <span class="radial radial--first | mouseMove" data-depth="10"></span>
                        <span class="radial radial--second | mouseMove" data-depth="20"></span>
                        <span class="radial radial--third | mouseMove" data-depth="30"></span>
                        <div class="hero__picture-frame | mouseMove" data-depth="40">
                            <img src="/images/main-photo.jpg" alt="A picture of me drinking a good cup of coffee" class="hero__picture" aria-hidden="true" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="base-section">
            <div class="center">
                <div class="ga">
                    <div class="ga__cross | rotate-me"></div>
                    <div class="ga__line"></div>
                </div>
                <div class="brands-info">
                    <p class="brands-info__copy">Checkout some of the brands I've worked with:</p>
                    <div class="logo-list">
                        <img src="/images/logos/harvard-kennedy-school-logo.png" alt="HARVARD Kennedy School - John F. Kennedy School of Government" class="logo-list__logo">
                        <img src="/images/logos/facebook-logo.png" alt="Facebook" class="logo-list__logo">
                        <img src="/images/logos/unicef-logo.png" alt="Unicef" class="logo-list__logo">
                        <img src="/images/logos/nyu-logo.png" alt="The Govlab @NYU" class="logo-list__logo">
                        <img src="/images/logos/bb-logo.png" alt="Banco do Brasil" class="logo-list__logo">
                    </div>
                </div>
                <div class="ga | reverse">
                    <div class="ga__cross | rotate-me"></div>
                    <div class="ga__line"></div>
                </div>
            </div>
        </section>
        <section class="base-section">
            <div class="center" size="wide">
                <h2>Jobs</h2>
                <p>Some of the jobs I've contributed in recent years:</p>
                <div class="joblist">
                    <div class="joblist__job joblist__job--big">
                        <div class="joblist__image joblist__image--bl joblist__image--center" style="background-image: url(/images/jobs/spotlight.jpg)"></div>
                        <div class="joblist__info">
                            <h3 class="joblist__title">Harvard University - Tech Spotlight</h3>
                            <p>The Technology and Public Purpose Project</p>
                        </div>
                    </div>
                    <div class="joblist__job joblist__job--small">
                        <div class="joblist__info">
                            <h3 class="joblist__title">Responsible Data for Children</h3>
                            <p>A joint endeavor between UNICEF and The GovLab at New York University</p>
                        </div>
                        <div class="joblist__image joblist__image--br joblist__image--top" style="background-image: url(/images/jobs/rd4c.jpg)"></div>
                    </div>
                    <div class="joblist__job joblist__job--small">
                        <div class="joblist__image joblist__image--bl joblist__image--top" style="background-image: url(/images/jobs/facebook.png)"></div>
                        <div class="joblist__info">
                            <h3 class="joblist__title">Facebook</h3>
                            <p>Election Integrity Project</p>
                        </div>
                    </div>
                    <div class="joblist__job joblist__job--big">
                        <div class="joblist__info">
                            <h3 class="joblist__title">Harvard University - Tech Spotlight</h3>
                            <p>The Technology and Public Purpose Project</p>
                        </div>
                        <div class="joblist__image joblist__image--br joblist__image--center" style="background-image: url(/images/jobs/chrysalis.jpg)"></div>
                    </div>
                </div>
            </div>
        </section>
    </main>    
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue';
import socialMedia from '@/components/socialMedia.vue'

const handleScroll = () => {
  const rotateElements = document.getElementsByClassName('rotate-me');
  const rotationAmount = window.pageYOffset / 4; // Adjust rotation speed here

  for (let i = 0; i < rotateElements.length; i++) {
    rotateElements[i].style.transform = `rotate(${rotationAmount}deg)`;
  }
};

const rotateElement = (event) => {
  const elements = document.getElementsByClassName('mouseMove');
for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    const centerX = element.offsetLeft + element.offsetWidth / 2;
    const centerY = element.offsetTop + element.offsetHeight / 2;
    const mouseX = event.pageX
    const mouseY = event.pageY
    const depth = element.getAttribute('data-depth');
    const rotateX = -((mouseY - centerY) / 10) / depth
    const rotateY = ((mouseX - centerX) / 10) / depth
        
    element.style.transform = `translate(-50%, -50%) perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
}
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('mousemove', rotateElement)
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('mousemove', rotateElement)
});
</script>

<style lang="scss" scoped>

    .hero {
        display: flex;
        flex-flow: row nowrap;
        width: 100%;
        align-items: center;
        position: relative;
        gap: 64px;
        @media (max-width: 52em) {
            flex-direction: column;
        }
    }

        .hero__info {
            flex-grow: 1;
            position: relative;
            z-index: 1;
            padding-right: 16px;
            .hero__title, .hero__subtitle {
                text-align: left;
            }
            h1 {
                color: #FFDE68;
                font-size: 4em;
            }
            h2 {
                font-size: 1.7em;
                color: #fff;
                a {
                    color: #fff;
                }
            }
            p {
                color: #868686;
            }
            .spacer {
                width: 15%;
                height: 2px;
                background-color: #FFF;
                display: block;
                margin-block: 32px;
            }
        }

        .hero__picture-container {
            position: relative;
            overflow: hidden;
            flex-shrink: 0;
            width: 370px;
            height: 750px;
            /*&::after {
                content: '';
                position: absolute;
                top: -30%;
                left: 0%;
                right: -275%;
                bottom: -225%;
                background: radial-gradient(circle, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.8) 100%);
                
            }*/
        }

        .hero__picture-frame {
            border-radius: 160px 160px 12px 12px;
            overflow: hidden;
            width: 320px;
            height: 375px;
            z-index: 1;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        .hero__picture {
            width: 100%;
        }

        .radial {
            position: absolute;
            top: 50%;
            left: 50%;
            border: 1px solid #FFDE68;
            transform: translate(-50%, -50%);
            width: 320px;
            z-index: 0;
            border-radius: 160px;
        }

            .radial--first {
                height: 700px;
            }

            .radial--second {
                height: 600px;
            }

            .radial--third {
                height: 500px;
            }

        .hero__logo {
            position: absolute;
            height: 140px;
            width: 140px;
            bottom: -50px;
            right: -50px;
            display: none;
        }

        .ga {
            width: 100%;
            display: flex;
            flex-flow: column nowrap;
            align-items: center;
            gap: 16px;
            &.reverse {
                transform: rotate(180deg);
            }
        }

        .ga__cross {
            position: relative;
            height: 15px;
            width: 15px;
            &::before {
                content: '';
                position: absolute;
                top: 0;
                left: 7px;
                right: 7px;
                bottom: 0;
                background-color: #FFF;
                transform: rotate(45deg);
            }
            &::after {
                content: '';
                position: absolute;
                top: 7px;
                left: 0;
                right: 0;
                bottom: 7px;
                background-color: #FFF;
                transform: rotate(45deg);
            }
        }

        .ga__line {
            height: 75px;
            width: 1px;
            background-color: #FFF;
        }

    .brands-info {
        padding-block: 32px;
        text-align: center;
    }

        .brands-info__copy {
                color: #868686;
        }

    .logo-list {
        width: 50%;
        margin: 64px 25% 0;
        display: flex;
        flex-flow: row wrap;
        gap: 32px;
        justify-content: center;
        opacity: 0.7;
    }

        .logo-list__logo {
            height: 40px;
        }

    .joblist {
        display: flex;
        flex-flow: row wrap;
        gap: 64px;
        justify-content: center;
        padding-top: 128px;
    }

    .joblist__job {
        height: 540px;
        display: flex;
        flex-flow: column nowrap;
        gap: 32px;
    }

        .joblist__job--small {
            width: 320px;
        }

        .joblist__job--big {
            width: 480px;
        }

    .joblist__image {
        flex-shrink: 1;
        flex-grow: 1;
        background-size: cover;
    }

        .joblist__image--top {
            background-position: top center;
        }

        .joblist__image--center {
            background-position: center;
        }

        .joblist__image--bottom {
            background-position: bottom center;
        }

        .joblist__image--tl {
            border-radius: 12px 160px 160px 160px;
        }

        .joblist__image--tr {
            border-radius: 160px 12px 160px 160px;
        }

        .joblist__image--bl {
            border-radius: 160px 160px 160px 12px;
        }

        .joblist__image--br {
            border-radius: 160px 160px 12px 160px;
        }

    .joblist__image-obj {
        width: 130%;
    }
</style>
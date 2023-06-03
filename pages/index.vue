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
                        <h2 class="hero__subtitle">An Interfaces Developer <a href="https://www.ccmdesign.ca/" target="_blank">@CCMDESIGN</a></h2>
                        <h2 class="hero__subtitle">And a UX Researcher <a href="https://www.pelando.com.br/" target="_blank">@Pelando</a></h2>
                        <span class="spacer"></span>
                        <p> I love coding animated, responsive, and dynamic web pages, always mindful of accessibility and striving for the best possible interaction.</p>
                        <social-media></social-media>
                    </div>
                    <div class="hero__picture-container">
                        <img src="/images/main-photo.jpg" alt="Seidgy Amano" class="hero__picture" aria-hidden="true" />
                    </div>
                </div>
            </div>
        </section>
    </main>    
</template>

<script setup>
import socialMedia from '@/components/socialMedia.vue'
</script>

<style lang="scss" scoped>
    .hero {
        display: flex;
        flex-flow: row nowrap;
        width: 100%;
        align-items: center;
    }

        .hero__info {
            width: 50%;
            position: relative;
            z-index: 1;
            padding-right: 16px;
            .hero__title, .hero__subtitle {
                width: 140%;
                text-align: left;
            }
            h1 {
                color: #FFDE68;
                font-size: 4em;
            }
            h2 {
                font-size: 1.7em;
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
            width: 50%;
            position: relative;
            overflow: hidden;
            &::after {
                content: '';
                position: absolute;
                top: -30%;
                left: 0%;
                right: -275%;
                bottom: -225%;
                background: radial-gradient(circle, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.8) 100%);
                
            }
        }

        .hero__picture {
            width: 100%;
            filter: blur(1.2px);
        }
</style>
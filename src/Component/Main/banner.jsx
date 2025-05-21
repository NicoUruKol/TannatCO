import BannerDelivery from '../../assets/banner_x_delivery_slide.webp'
import BannerSlide from '../../assets/banner_x_mayor_slide.webp'

export default function Banner(){
    return(
        <section>
            <div className="banner-slide">
                <ul>
                    <li>
                        <a href="mailto:ventas@tannat&co.com">
                            <img src={BannerDelivery} alt=""/>
                        </a>
                    </li>
                    <li>
                        <img src={BannerSlide} alt=""/>
                    </li>
                </ul>
            </div>
        </section>
    )
}
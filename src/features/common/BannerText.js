import Button from "./Button"

const BannerText = ({ src, h1, h2, h3,h1class,h2class,h3class, banclass,btnclass }) => {
    return (
        <div className={banclass}>
            {src && <div>
                <img className="m-4 " src={src} />
            </div>}
            {h1 && <h6 className={h1class}>{h1}</h6>}
            {h2 && <h3 className={h2class}>{h2}</h3>}
            {h3 && <h6 className={h3class}>{h3}</h6>}
            {btnclass && <Button text="SHOP NOW" textclass={btnclass} />}


        </div>
    )
}

export default BannerText
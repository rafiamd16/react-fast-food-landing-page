/* eslint-disable react/prop-types */
import parse from "html-react-parser"

const Service = ({ serviceList }) => {
    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {serviceList.map((service, index) => {
                return (
                    <div className="text-center py-5 px-[30px]" key={index}>
                        <img
                            src={service.image}
                            alt="service"
                            width={90}
                            className="mx-auto"
                        />
                        {parse(service.content)}
                    </div>
                )
            })}
        </div>
    )
}

export default Service

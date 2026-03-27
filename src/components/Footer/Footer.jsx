import React from "react";
import FooterImg from "../../assets/logo-footer.png";
import { FaDotCircle } from "react-icons/fa";
const Footer = () => {
    return (
        <div className="bg-black p-14">
            <div className="container mx-auto text-white ">
                <div>
                    <img className="mx-auto" src={FooterImg} alt="" />
                </div>
                <div className="grid grid-cols-3 mt-28 gap-44 justify-between items-center">
                    <div className="space-y-4">
                        <h3 className="font-semibold text-[18px]">About Us</h3>
                        <p>We are a passionate team dedicated to providing the best services to our customers.</p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="font-semibold text-[18px]">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a className="flex items-center gap-2 ml-5" href=""><FaDotCircle /> Home</a>
                            </li>
                            <li>
                                <a className="flex items-center gap-2 ml-5" href=""><FaDotCircle />Services</a>
                            </li>
                            <li>
                                <a className="flex items-center gap-2 ml-5" href=""><FaDotCircle />About</a>
                            </li>
                            <li>
                                <a className="flex items-center gap-2 ml-5" href=""><FaDotCircle />Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h3 className="font-semibold text-[18px]">Subscribe</h3>
                        <p>Subscribe to our newsletter for the latest updates.</p>
                        <input className="p-3 border rounded-xl mr-4" type="email" placeholder="Enter your email" />
                        <button className="btn p-6 border bg-linear-to-r from-pink-400 to-amber-400">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;

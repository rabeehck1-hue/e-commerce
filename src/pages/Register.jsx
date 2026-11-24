import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        phone: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch("https://e-server-11pu.onrender.com/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        });

        const data = await res.json();
        console.log(data);
        setFormData({
            name: "",
            email: "",
            password: "",
            phone: ""
        })
    };

    return (
        <div className="min-h-screen flex items-center justify-center
        bg-linear-to-br from-slate-100 via-blue-50 to-indigo-100
        px-4 py-12">

            <div className="w-full max-w-md bg-white/90 backdrop-blur-xl
            p-8 sm:p-10 rounded-3xl shadow-2xl shadow-blue-900/10
            border border-white">

                {/* Heading */}
                <div className="text-center mb-8">

                    <div className="w-16 h-16 mx-auto mb-5 rounded-2xl
                    bg-linear-to-br from-blue-600 to-indigo-600
                    flex items-center justify-center shadow-lg shadow-blue-500/30">

                        <span className="text-3xl text-white font-bold">
                            +
                        </span>

                    </div>

                    <h2 className="text-3xl font-extrabold
                    tracking-tight text-slate-800">
                        Create Account
                    </h2>

                    <p className="text-slate-500 mt-2 text-sm">
                        Join us and get started today!
                    </p>

                </div>

                <form onSubmit={handleSubmit} className="space-y-5">

                    {/* Name */}
                    <div>
                        <label className="block text-sm font-semibold
                        text-slate-700 mb-2">
                            Full Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3.5 bg-slate-50
                            border border-slate-200 rounded-xl
                            text-slate-800 placeholder:text-slate-400
                            outline-none transition-all duration-200
                            focus:bg-white focus:border-blue-500
                            focus:ring-4 focus:ring-blue-500/10"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-semibold
                        text-slate-700 mb-2">
                            Email Address
                        </label>

                        <input
                            type="email"
                            name="email"
                            placeholder="you@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3.5 bg-slate-50
                            border border-slate-200 rounded-xl
                            text-slate-800 placeholder:text-slate-400
                            outline-none transition-all duration-200
                            focus:bg-white focus:border-blue-500
                            focus:ring-4 focus:ring-blue-500/10"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-semibold
                        text-slate-700 mb-2">
                            Password
                        </label>

                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3.5 bg-slate-50
                            border border-slate-200 rounded-xl
                            text-slate-800 placeholder:text-slate-400
                            outline-none transition-all duration-200
                            focus:bg-white focus:border-blue-500
                            focus:ring-4 focus:ring-blue-500/10"
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block text-sm font-semibold
                        text-slate-700 mb-2">
                            Phone Number
                        </label>

                        <input
                            type="tel"
                            name="phone"
                            placeholder="Enter your phone number"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3.5 bg-slate-50
                            border border-slate-200 rounded-xl
                            text-slate-800 placeholder:text-slate-400
                            outline-none transition-all duration-200
                            focus:bg-white focus:border-blue-500
                            focus:ring-4 focus:ring-blue-500/10"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-3.5 mt-3
                        bg-linear-to-r from-blue-600 to-indigo-600
                        hover:from-blue-700 hover:to-indigo-700
                        text-white font-bold rounded-xl
                        shadow-lg shadow-blue-500/25
                        hover:shadow-blue-500/40
                        hover:-translate-y-0.5
                        active:translate-y-0
                        transition-all duration-200"
                    >
                        Create Account →
                    </button>

                </form>

                {/* Login Link */}
                <div className="mt-8 pt-6 border-t border-slate-100">

                    <p className="text-center text-sm text-slate-500">
                        Already have an account?

                        <Link
                            to="/login"
                            className="text-blue-600 font-bold ml-1
                            hover:text-indigo-700 transition-colors"
                        >
                            Login
                        </Link>

                    </p>

                </div>

            </div>
        </div>
    )
}

export default Register
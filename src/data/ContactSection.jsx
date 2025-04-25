export const contactSection = {
  content: `<h3 className="text-4xl font-bold text-center text-primary mb-3">
  Contact Us
</h3>
<p className="text-dark text-center mb-8">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
  dicta.
</p>
<div className="w-full flex flex-col gap-y-1 mb-6 md:w-2/3">
  <label htmlFor="name">Name</label>
  <input
    type="text"
    id="name"
    className="outline-none px-2 py-4 bg-slate-100 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary transition"
  />
</div>
<div className="w-full flex flex-col gap-y-1 mb-6 md:w-2/3">
  <label htmlFor="email">Email</label>
  <input
    type="text"
    id="email"
    className="outline-none px-2 py-4 bg-slate-100 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary transition"
  />
</div>
<div className="w-full flex flex-col gap-y-1 mb-6 md:w-2/3">
  <label htmlFor="address">Address</label>
  <textarea className="outline-none p-3 h-36 bg-slate-100 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary transition"></textarea>
</div>
<div className="w-full flex items-center md:w-2/3">
  <button
    type="submit"
    className="py-3 px-8 text-xl bg-dark rounded-md w-full font-bold hover:bg-gradient-to-r from-red-500 to-primary group"
  >
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-primary group-hover:text-dark transition duration-300 ease-in-out">
      Submit
    </span>
  </button>
</div>`,
};

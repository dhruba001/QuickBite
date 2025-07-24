const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-7xl p-4 m-4">Contact Us Page</h1>
      <div>
        <form>
          <input
            type="text"
            className="border border-black p-2 m-2"
            placeholder="name"
          />
          <input
            type="text"
            className="border border-black p-2 m-2"
            placeholder="message"
          />
          <button className="border border-black p-2 m-2 bg-gray-200 rounded-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

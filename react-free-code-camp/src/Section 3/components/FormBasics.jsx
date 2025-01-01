export default function FormBasics() {
    const signUp = (formData) => {
        const data = Object.fromEntries(formData);
        const skills = formData.getAll("skills");
        const allData = {...data, skills};
        console.log(allData);
        alert("Object Generated! View in the Console Log.");
    };

    return (
        <div className="black-box p-4 form-basics">
            <h2 className="text-center">Sign Up Form</h2>
            <form action={signUp}>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="example@gmail.com"
                    defaultValue="nuru@gmail.com"
                    className="block w-full"
                />
                <br />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="********"
                    defaultValue="password123"
                    className="block w-full"
                />
                <br />
                <label htmlFor="description">Description:</label>
                <textarea
                    name="description"
                    id="description"
                    placeholder="Write your description here..."
                    defaultValue="I am a description."
                    className="w-full block"
                ></textarea>
                <br />
                <fieldset className="border border-react p-3 rounded-md">
                    <legend>Employment Status:</legend>
                    <label>
                        <input
                            type="radio"
                            name="employmentStatus"
                            className="mr-2"
                            value="Unemployed"
                            defaultChecked
                        />
                        Unemployed
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="employmentStatus"
                            className="mr-2"
                            value="Part-time"
                        />
                        Part-time
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="employmentStatus"
                            className="mr-2"
                            value="Full-time"
                        />
                        Full-time
                    </label>
                </fieldset>
                <br />
                <fieldset className="border border-react p-3 rounded-md">
                    <legend>Skills You Have:</legend>
                    <label>
                        <input
                            type="checkbox"
                            name="skills"
                            className="mr-2"
                            value="Javascript"
                            defaultChecked
                        />
                        Javascript
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="skills"
                            className="mr-2"
                            value="React Js"
                        />
                        React Js
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="skills"
                            className="mr-2"
                            value="Next Js"
                        />
                        Next Js
                    </label>
                </fieldset>
                <br />
                <label htmlFor="favSkill">Select your favorite skill:</label>
                <select name="favSkill" id="favSkill" required className="block w-full" defaultValue="React Js">
                    <option value="">-- Choose Skill --</option>
                    <option value="Html">Html</option>
                    <option value="Css">Css</option>
                    <option value="Git & Github">Git & Github</option>
                    <option value="Tailwind Css">Tailwind Css</option>
                    <option value="Javascript">Javascript</option>
                    <option value="React Js">React Js</option>
                    <option value="Next Js">Next Js</option>
                    <option value="Express Js">Express Js</option>
                    <option value="Mongo DB">Mongo DB</option>
                </select>
                <br />
                <input
                    type="submit"
                    value="Sign Up"
                    className="w-full py-3 cursor-pointer hover:bg-slate-600"
                />
            </form>
        </div>
    );
}

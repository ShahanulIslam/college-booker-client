
const Admission = () => {
    const handleAddCandidate = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const subject = form.subject.value;
        const email = form.email.value;
        const phoneNumber = form.phoneNumber.value;
        const dateOfBirth = form.dateOfBirth.value;
        const imageUrl = form.imageUrl.value;
        console.log(name, subject, email, phoneNumber, dateOfBirth, imageUrl);
        const submit = {
            name,
            subject,
            email,
            phoneNumber,
            dateOfBirth,
            imageUrl
        }
        console.log(submit);

    }
    return (
        <div>
            <div className='text-center my-5'>
                <h2 className='text-3xl font-bold'>Add Candidate Details</h2>
            </div>
            <form onSubmit={handleAddCandidate} className="card-body">
                <div className="flex w-3/5 mx-auto gap-4">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Candidate Name</span>
                        </label>
                        <input type="text" required placeholder="Candidate Name" name="name" className="input input-bordered" />
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Subject</span>
                        </label>
                        <input type="text" required placeholder="Subject" name="subject" className="input input-bordered" />
                    </div>
                </div>
                <div className="flex w-3/5 mx-auto gap-4">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Candidate Email</span>
                        </label>
                        <input type="email" required placeholder="Candidate Email" name="email" className="input input-bordered" />
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Candidate Phone Number</span>
                        </label>
                        <input type="tel" required placeholder="Candidate Phone Number" name="phoneNumber" className="input input-bordered" />
                    </div>
                </div>
                <div className="flex w-3/5 mx-auto gap-4 ">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <input type="text" required placeholder="Address" name="address" className="input input-bordered" />
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Date of Birth</span>
                        </label>
                        <input type="date" required name="dateOfBirth" className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control w-3/5 mx-auto">
                    <label className="label">
                        <span className="label-text">Image URL</span>
                    </label>
                    <input type="text" required placeholder="Image URL" name="imageUrl" className="input input-bordered" />
                </div>
                <div className="form-control mt-6 w-3/5 mx-auto">
                    <input className="btn bg-[#95a9c2] border-0 text-black hover:text-white" type="submit" value="Add Candidate" />
                </div>
            </form>
        </div>

    );
};

export default Admission;
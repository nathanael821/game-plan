const AddTaskModal = props => {
    const { showModal, setShowModal } = props;

    if (showModal)
        return (
            <>
                <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                    <div className="relative mx-auto my-3 w-modal">
                        <div className="relative flex flex-col w-full border-0 rounded-lg shadow-lg outline-none bg-bgform focus:outline-none">
                            <div className="flex items-start justify-between p-5 pt-0 rounded-t">
                                <button className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none focus:outline-none"
                                    onClick={() => setShowModal(false)}
                                >
                                    <span className="block text-5xl text-black bg-transparent outline-none focus:outline-none">×</span>
                                </button>
                            </div>
                            <div className="relative flex flex-auto p-6 pt-0 flex-rot">
                                <div className="flex items-end justify-center basis-6/12">
                                    <img src="/images/add-task.png" width="80%" />
                                </div>
                                <div className="basis-6/12">
                                <div className="max-w-xl mx-auto divide-y md:max-w-4xl">
                                    <div className="py-12">
                                        <h2 className="text-4xl font-semibold">Add task</h2>
                                        <div className="max-w-md mt-8">
                                            <div className="grid grid-cols-1 gap-6">
                                                <label className="block">
                                                    <span className="text-gray-700">Task name</span>
                                                    <input
                                                        type="text"
                                                        className="form-element-rt"
                                                        placeholder="Ex: Re-design company logo"
                                                    />
                                                </label>
                                                <label className="relative block">
                                                    <span className="text-gray-700">Priority</span>
                                                    <select className="form-element-rt">
                                                        <option value="1">Low</option>
                                                        <option value="2">Medium</option>
                                                        <option value="3">High</option>
                                                    </select>
                                                </label>
                                                <label className="flex justify-end">
                                                    <input type="submit" value="Add task" className="modal-submit-rt" aria-expanded="false" onClick={() => setShowModal(false)} />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>

                        </div>
                        </div>
                    </div>
                <div className="fixed inset-0 z-40 bg-black opacity-50"></div>
            </>
        )
    else
        return <></>
}

export default AddTaskModal;
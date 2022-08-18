import { useState } from 'react';

const AddAutomationModal = props => {
    const { showModal, setShowModal } = props;
    const [ showDropdown, setShowDropdown ] = useState(false);
    const [ showSomething, setShowSomething ] = useState(false);
    const [ statusText, setStatusText ] = useState('Group');
    const [ someThingText, setSomethingText ] = useState('Something');

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    }

    const toggleSomething = () => {
        setShowSomething(!showSomething);
    }

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
                                <div className="flex items-end justify-center basis-7/12">
                                    <img src="/images/add-automation.png" width="80%" />
                                </div>
                                <div className="basis-5/12">
                                    <div className="max-w-xl mx-auto md:max-w-4xl">
                                        <h2 className="text-4xl font-semibold">Add automation</h2>
                                        <div className='relative'>
                                            <p className="pt-10 text-2xl">
                                                When <span className="italic font-semibold">Status</span> changes to <span className="italic font-semibold cursor-pointer" onClick={toggleSomething}>{someThingText}</span>, move task to
                                            </p>
                                            { showSomething &&
                                                <div className="absolute w-48 border-2 border-gray-300 rounded-lg z-100 top-full bg-bgbtn">
                                                    <ul className='cursor-pointer' onClick={toggleSomething}>
                                                        <li className="p-2 text-xl" onClick={e => setSomethingText(e.target.innerText)}>Open tasks</li>
                                                        <li className="p-2 text-xl border-t-2 border-t-dropdown" onClick={e => setSomethingText(e.target.innerText)}>Closed</li>
                                                    </ul>
                                                </div>
                                            }
                                        </div>
                                        <div className="relative">
                                            <span className="text-2xl italic font-semibold cursor-pointer" onClick={toggleDropdown}>{statusText}</span>
                                            { showDropdown &&
                                                <div className="absolute w-48 border-2 border-gray-300 rounded-lg z-100 top-full bg-bgbtn">
                                                    <ul className='cursor-pointer' onClick={toggleDropdown}>
                                                        <li className="p-2 text-xl" onClick={e => setStatusText(e.target.innerText)}>Open</li>
                                                        <li className="p-2 text-xl border-y-dropdown border-y-2" onClick={e => setStatusText(e.target.innerText)}>Working on it</li>
                                                        <li className="p-2 text-xl" onClick={e => setStatusText(e.target.innerText)}>Done</li>
                                                    </ul>
                                                </div>
                                            }
                                        </div>
                                        <label className="flex justify-end mt-16">
                                            <input type="submit" value="Add automation" className="modal-submit-rt" aria-expanded="false" onClick={() => setShowModal(false)} />
                                        </label>
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

export default AddAutomationModal;
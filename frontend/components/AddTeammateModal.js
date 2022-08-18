import { useState } from 'react';

const AddTeammateModal = props => {
    const { showModal, setShowModal } = props;
    const [ inviteCnt, setInviteCnt ] = useState(1);

    const addInputs = cnt => {
        let output = [];
        for (let i=0; i<cnt; i++) {
            output.push(
                <label className="block" key={i}>
                    <span className="text-gray-700">Email address</span>
                    <div className="flex items-center">
                        <input
                            type="text"
                            className="form-element-team-rt"
                            placeholder="Ex: sanan@gameplan.io"
                        />
                        <button value="Invite" className="ml-2 modal-submit-rt" aria-expanded="false">Invite</button>
                    </div>
                </label>
            )
        }
        return output;
    }

    if (showModal)
        return (
            <>
                <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                    <div className="relative mx-auto my-3 w-teammodal">
                        <div className="relative flex flex-col w-full border-0 rounded-lg shadow-lg outline-none bg-bginput focus:outline-none">
                            <div className="flex items-start justify-between p-5 pt-0 rounded-t">
                                <button className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none focus:outline-none"
                                    onClick={() => setShowModal(false)}
                                >
                                    <span className="block text-5xl text-black bg-transparent outline-none focus:outline-none">×</span>
                                </button>
                            </div>
                            <div className="relative flex flex-auto p-6 pt-0 flex-rot">
                                <div className="basis-5/12">
                                    <div className="max-w-xl mx-auto divide-y md:max-w-4xl">
                                        <div>
                                            <h2 className="mb-16 text-4xl font-semibold">Invite your teammates</h2>
                                            <span className="text-lg text-link">Invite sent successfully to sanan@gameplan.io</span>
                                            <div className="max-w-md mt-8">
                                                <div className="grid grid-cols-1 gap-6">
                                                    { addInputs(inviteCnt) }
                                                    <label className="block">
                                                        <input type="submit" value="Add more" className="text-lg font-semibold btn-rt bg-bgform" aria-expanded="false" onClick={() => {setInviteCnt(inviteCnt + 1)}} />
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-end justify-center basis-7/12">
                                    <img src="/images/add-teammate.png" width="80%" />
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

export default AddTeammateModal;
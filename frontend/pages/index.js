import Head from 'next/head'
import Link from 'next/link';
import { useState } from 'react';
import AddTaskModal from '../components/AddTaskModal';
import AddAutomationModal from '../components/AddAutomationModa';
import AddTeammateModal from '../components/AddTeammateModal';
import Footer from '../components/Footer';

export default function Home() {
  const [ showAddTaskModal, setShowAddTaskModal ] = useState(false);
  const [ showAutoModal, setShowAutoModal ] = useState(false);
  const [ showTeammateModal, setShowTeammateModal ] = useState(false);
  const [ showFilter, setShowFilter ] = useState(false);
  const [ showBlank, setShowBlank ] = useState(false);

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  }

  return (
    <>
      <Head>
        <title>My Projects</title>
      </Head>
      <main>
        <div className="flex items-center justify-between p-12 bg-bgform">
            <h1 className="text-4xl">My Awesome Project</h1>
            <div className="btn-rt bg-bgredbtn">
                <Link href="/signin">Logout</Link>
            </div>
        </div>
        <div className='py-10 px-28 min-h-mainbodyheight'>
          <div className='flex flex-row justify-between'>
            <div>
              <h2 className='text-3xl'>Views</h2>
              <div className='flex mt-3'>
                <button className='mr-3 btn-rt bg-bgbtn btn-active-rt'>Main</button>
                <button className='mr-3 btn-rt bg-bgbtn'>Kanban</button>
                <button className='mr-3 btn-rt bg-bgbtn'>Gantt</button>
              </div>
            </div>
            <div className='text-right'>
              <h2 className='text-3xl'>Board actions</h2>
              <div className='flex justify-end mt-3'>
                <button className='ml-3 btn-rt bg-bgbtn' onClick={() => setShowTeammateModal(true)}>Add teammate</button>
                <button className='ml-3 btn-rt bg-bgbtn' onClick={() => setShowAutoModal(true)}>Add automation</button>
                <button className='ml-3 btn-rt bg-bgbtn' onClick={() => setShowBlank(!showBlank)}>More</button>
              </div>
            </div>
          </div>
          <div className='flex flex-row justify-between mt-10'>
            <div className='w-full'>
              <h2 className='text-3xl'>Actions</h2>
              <div className='flex flex-row justify-between mt-3'>
                <div className='flex'>
                  <button className='mr-3 btn-rt bg-bgbtn' onClick={() => setShowAddTaskModal(true)}>Add task</button>
                  <button className='mr-3 btn-rt bg-bgbtn btn-active-rt' onClick={toggleFilter}>Filters</button>
                </div>
                <div className='h-8'>
                  <img className='float-right' src="/images/robot.png" width="44" />
                </div>
              </div>
            </div>
          </div>

          { showFilter &&
            <div className='flex flex-row p-5 mt-3 rounded-lg bg-bgform'>
              <div className='basis-2/12'>
                <h4 className='text-2xl'>Kind</h4>
                <button className='mt-3 btn-dasboard-rt bg-bginput'>Open issues</button>
                <button className='mt-3 btn-dasboard-rt bg-bginput'>Backlog</button>
              </div>
              <div className='basis-2/12'>
                <h4 className='text-2xl'>Priority</h4>
                <button className='mt-3 btn-dasboard-rt bg-bgbtn'>Low</button>
                <button className='mt-3 btn-dasboard-rt bg-bgyellowbtn'>Medium</button>
                <button className='mt-3 btn-dasboard-rt bg-bgredbtn'>High</button>
              </div>
              <div className='basis-2/12'>
                <h4 className='text-2xl'>Status</h4>
                <button className='mt-3 btn-dasboard-rt bg-bgbtn'>Open</button>
                <button className='mt-3 btn-dasboard-rt bg-bgyellowbtn'>In progress</button>
                <button className='mt-3 btn-dasboard-rt bg-bgbtnactive'>Done</button>
              </div>
              <div className='basis-2/12'>
                <h4 className='text-2xl'>Assigned to</h4>
              </div>
            </div>
          }
          
          <div className='p-5 pb-32 mt-10 rounded-lg bg-bgform'>
            <div className='flex flex-row'>
              <div className='basis-6/12'>
                <h4 className='text-2xl'>Open tasks</h4>
              </div>
              <div className='basis-2/12'>
                <h4 className='text-2xl'>Priority</h4>
              </div>
              <div className='basis-2/12'>
                <h4 className='text-2xl'>Status</h4>
              </div>
              <div className='basis-2/12'>
                <h4 className='text-2xl'>Assigned to</h4>
              </div>
            </div>
            { !showBlank &&
              <div className='flex flex-row'>
                <div className='basis-6/12'>
                  <button className='flex justify-start w-full py-1 mt-3 text-xl text-black px-7 hover:cursor-pointer focus:outline-none bg-bginput rounded-l-md'>Invite teammates to GamePlan</button>
                </div>
                <div className='basis-2/12'>
                  <button className='w-full mt-3 btn-group-rt bg-bgredbtn'>High</button>
                </div>
                <div className='basis-2/12'>
                  <button className='w-full mt-3 btn-group-rt bg-bgbtn'>Open</button>
                </div>
                <div className='basis-2/12'>
                  <button className='w-full mt-3 text-xl btn-common-rt rounded-r-md bg-bginput'>Unassigned</button>
                </div>
              </div>
            }
            { showBlank &&
              <div className='mt-16'>
                <div className='flex justify-center'>
                  <img src="/images/noitem.png" />
                </div>
                <h4 className='mt-2 text-3xl text-center'>Hmm... that greeen button must be important</h4>
              </div>
            }
          </div>
        </div>
        <AddTaskModal showModal={showAddTaskModal} setShowModal={setShowAddTaskModal} />
        <AddAutomationModal showModal={showAutoModal} setShowModal={setShowAutoModal} />
        <AddTeammateModal showModal={showTeammateModal} setShowModal={setShowTeammateModal} />
      </main>
      <Footer />
    </>
  )
}

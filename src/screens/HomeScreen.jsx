import React, {useContext, useState, Fragment, useEffect} from 'react';
import logo from '../assets/logohome.png'
import {useHistory} from "react-router-dom";
import {QueryContext} from "../data/QueryContext";
import {SiteContext} from "../data/SiteContext";
import {PageContext} from "../data/PageContext";
import axios from "../utils/BingSpellCheckAxios";
import { Listbox, Transition } from '@headlessui/react'
import {ResContext} from "../data/ResContext";
import firebase from "firebase/app";
import "firebase/analytics";

function HomeScreen(props) {



    const history = useHistory()
    const [query,setQuery] = useContext(QueryContext)
    const [site,setSite] = useContext(SiteContext)
    const [page,setPage] = useContext(PageContext)
    const [res,setRes] = useContext(ResContext)
    const [isResources,setIsResources] = useState(false)
    const [resInpt,setResInpt] = useState(0)
    const [queryinpt,setQueryinpt] = useState('')
    const [siteinpt,setSiteinpt] = useState(site)


    useEffect((effect) => {
        if (site === 6){
            setIsResources(true)
        }else {
            setIsResources(false)
        }
        if (siteinpt === 6){
            setIsResources(true)
        }else {
            setIsResources(false)
        }
    },[siteinpt,site])



    const opts = [
        { id: 0 , name: 'StackOverflow' },
        { id: 1 , name: 'Github Issues' },
        { id: 2 , name: 'Github PR' },
        { id: 3 , name: 'Github repo' },
        { id: 4 , name: 'Jetpack Android' },
        { id: 5 , name: 'Npm Packages' },
        { id: 6 , name: 'Resources' },
    ]

    const resources = [
        { id: 0 , name: 'Android' },
        { id: 1 , name: 'Flutter' },
        { id: 2 , name: 'ReactNative' },
        { id: 3 , name: 'Mozilla Web' },
        { id: 4 , name: 'Docker' },
        { id: 5 , name: 'Firebase' },
        { id: 6 , name: 'TensorFlow' },
        { id: 7 , name: 'Google Web' },
        { id: 8 , name: 'Google Maps' },
        { id: 9 , name: 'Django' },
        { id: 10 , name: 'Rudy' },
        { id: 11 , name: 'Dart' },
        { id: 12 , name: 'Jest' },
        { id: 13 , name: 'MongoDb' },
        { id: 14 , name: 'Kubernetes' },
        { id: 15 , name: 'Google Cloud' },

    ]

    const [selected, setSelected] = useState(opts[0])
    const [selectedRes, setSelectedRes] = useState(resources[0])




    const updateQueryInpt = (e) =>{
        setQueryinpt(e.target.value)
    }

    const updateResInpt = (value) =>{
        setResInpt(value)
        setSelectedRes(resources[value])
        setRes(value)
    }

    const updateSiteInpt = (value) =>{
        setSiteinpt(value)
        setSelected(opts[value])
        setSite(value)
    }
    function updateQuery(e){
        e.preventDefault()

        if(isResources === true){
            history.push({
                pathname: '/search',
                search: `?q=${queryinpt}&page=${page}&site=${siteinpt}&res=${resInpt}`
            })
            firebase.analytics().logEvent('search');
            firebase.analytics().logEvent('doc_search');
        }else {
            history.push({
                pathname: '/search',
                search: `?q=${queryinpt}&page=${page}&site=${siteinpt}`
            })
            firebase.analytics().logEvent('search_done');
        }

    }


    return (
        <div className='flex justify-center h-screen flex-col items-center'>

                <img src={logo} className='h-1/6'/>


            <form  className='drop-shadow-xl bg-black-secondary self-center my-5 flex rounded-full flex w-1/2 justify-between z-10 font-montserrat text-lgshadow-2xl'>
                <input  defaultValue={query} onChange={updateQueryInpt}
                        className='mt-2 mb-2 ml-5 p-2 w-9/12 border-none bg-transparent outline-none text-white-secondaryText placeholder-white-secondaryText drop-shadow-2xl'/>
                <div className='w-1/4 mr-2 p-2  '>

                    <Listbox value={selected} onChange={value => updateSiteInpt(value)}>
                        <div className='relative  bg-black-secondary text-white-secondaryText'>
                            <Listbox.Button className=" relative w-full py-2 pl-3 pr-10 text-left bg-black-bg rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                                <span className="block truncate">{selected.name}</span>
                                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">

            </span>
                            </Listbox.Button>
                            <Transition

                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-black-secondary rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                    {opts.map((opt, optIdx) => (
                                        <Listbox.Option
                                            key={optIdx}
                                            className={({ active }) =>
                                                `${active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'}
                          cursor-default select-none relative py-2 pl-10 pr-4`
                                            }
                                            value={opt.id}
                                        >
                                            {({ selected, active }) => (
                                                <>
                      <span
                          className={`${
                              selected ? 'font-medium' : 'font-normal'
                          } block truncate`}
                      >
                        {opt.name}
                      </span>
                                                    {selected ? (
                                                        <span
                                                            className={`${
                                                                active ? 'text-amber-600' : 'text-amber-600'
                                                            }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                                                        >

                        </span>
                                                    ) : null}
                                                </>
                                            )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </Listbox>

                </div>

                {isResources && (
                    <div className='w-1/4  p-2 mr-2 '>

                        <Listbox value={selectedRes} onChange={value => updateResInpt(value)}>
                            <div className='relative  bg-black-secondary text-white-secondaryText'>
                                <Listbox.Button className=" relative w-full py-2 pl-3 pr-10 text-left bg-black-bg rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                                    <span className="block truncate">{selectedRes.name}</span>
                                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">

            </span>
                                </Listbox.Button>
                                <Transition

                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-black-secondary rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                        {resources.map((resource, resourceIdx) => (
                                            <Listbox.Option
                                                key={resourceIdx}
                                                className={({ active }) =>
                                                    `${active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'}
                          cursor-default select-none relative py-2 pl-10 pr-4`
                                                }
                                                value={resource.id}
                                            >
                                                {({ selected, active }) => (
                                                    <>
                      <span
                          className={`${
                              selected ? 'font-medium' : 'font-normal'
                          } block truncate`}
                      >
                        {resource.name}
                      </span>
                                                        {selected ? (
                                                            <span
                                                                className={`${
                                                                    active ? 'text-amber-600' : 'text-amber-600'
                                                                }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                                                            >

                        </span>
                                                        ) : null}
                                                    </>
                                                )}
                                            </Listbox.Option>
                                        ))}
                                    </Listbox.Options>
                                </Transition>
                            </div>
                        </Listbox>

                    </div>
                )

                }
                <button onClick={updateQuery} />
            </form>
        </div>
    );
}

export default HomeScreen;
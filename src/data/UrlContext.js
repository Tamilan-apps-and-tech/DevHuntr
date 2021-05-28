import React, {createContext, useState, useContext, useEffect} from "react";
import {QueryContext} from "./QueryContext";
import {PageContext} from "./PageContext";
import {changeEndpoint} from "../utils/EnpointChanger";
import resources from "./Res.json";
import {SiteContext} from "./SiteContext";
import data from "./Sites.json";
import {ResContext} from "./ResContext";
import firebase from "firebase";
import "firebase/analytics";


export const UrlContext = React.createContext()

export const UrlProvider = (props) => {

    const [url,setUrl] = useState()

    const [query,setQuery] = useContext(QueryContext)
    const [page,setPage] = useContext(PageContext)
    const [site,setSite] = useContext(SiteContext)
    const [res,setRes] = useContext(ResContext)



    useEffect(() => {

        if(query !== '') {
            if (data.sites[site].name === "StackOverflow") {
                setUrl(`search/advanced?page=${page}&order=desc&sort=votes&q=${query}&site=stackoverflow`)
                firebase.analytics().logEvent('so_search')
            }

            if (data.sites[site].name === "Github Issues") {
                setUrl(`/issues?q=${query}+is:issue&per_page=25&page=${page}`)
                firebase.analytics().logEvent('gh_issues_search');
            }

            if (data.sites[site].name === "Github Prs") {
                setUrl(`/issues?q=${query}+is:pr&per_page=25&page=${page}`)
                firebase.analytics().logEvent('gh_prs_search');

            }

            if (data.sites[site].name === "Github Repo") {
                setUrl(`/repositories?q=${query}+in:readme&per_page=25&page=${page}`)
                firebase.analytics().logEvent('gh_repo_search');
            }

            if (data.sites[site].name === "Jetpack Android") {
                setUrl(`/jpLibs?q=${query}`)
                firebase.analytics().logEvent('jp_lib_search');
            }

            if (data.sites[site].name === "Npm Package") {
                setUrl(`/npm?q=${query}`)
                firebase.analytics().logEvent('npm_search');
            }

            if (data.sites[site].name === "References") {
                firebase.analytics().logEvent('doc_search');
                if (res !== 16) {
                    if (resources[res].id === 0) {
                        setUrl(`/androidDocs?q=${query}`)
                        firebase.analytics().logEvent('android_doc_search');
                    }
                    if (resources[res].id === 1) {
                        setUrl(`/flutterDocs?q=${query}`)
                        firebase.analytics().logEvent('flutter_doc_search');
                    }
                    if (resources[res].id === 2) {
                        setUrl(`/reactnativeDocs?q=${query}`)
                        firebase.analytics().logEvent('reactnative_doc_search');
                    }
                    if (resources[res].id === 3) {
                        setUrl(`/webDocs?q=${query}`)
                        firebase.analytics().logEvent('mozilaweb_doc_search');
                    }
                    if (resources[res].id === 4) {
                        setUrl(`/dockerDocs?q=${query}`)
                        firebase.analytics().logEvent('docker_doc_search');
                    }
                    if (resources[res].id === 5) {
                        setUrl(`/firebaseDocs?q=${query}`)
                        firebase.analytics().logEvent('firebase_doc_search');
                    }
                    if (resources[res].id === 6) {
                        setUrl(`/tfDocs?q=${query}`)

                        firebase.analytics().logEvent('tf_doc_search');
                    }
                    if (resources[res].id === 7) {
                        setUrl(`/googleWebDocs?q=${query}`)

                        firebase.analytics().logEvent('googleweb_doc_search');
                    }
                    if (resources[res].id === 8) {
                        setUrl(`/googleMapsDocs?q=${query}`)

                        firebase.analytics().logEvent('googlemap_doc_search');
                    }
                    if (resources[res].id === 9) {
                        setUrl(`/djangoDocs?q=${query}`)

                        firebase.analytics().logEvent('django_doc_search');
                    }
                    if (resources[res].id === 10) {
                        setUrl(`/rubyDocs?q=${query}`)

                        firebase.analytics().logEvent('ruby_doc_search');
                    }
                    if (resources[res].id === 11) {
                        setUrl(`/dartDocs?q=${query}`)

                        firebase.analytics().logEvent('dart_doc_search');
                    }
                    if (resources[res].id === 12) {
                        setUrl(`/jestDocs?q=${query}`)

                        firebase.analytics().logEvent('jest_doc_search');
                    }
                    if (resources[res].id === 13) {
                        setUrl(`/mongoDocs?q=${query}`)

                        firebase.analytics().logEvent('mongi_doc_search');
                    }
                    if (resources[res].id === 14) {
                        setUrl(`/kubernetesDocs?q=${query}`)

                        firebase.analytics().logEvent('kubernetes_doc_search');
                    }
                    if (resources[res].id === 15) {
                        setUrl(`/googleCloudDocs?q=${query}`)

                        firebase.analytics().logEvent('googlecloud_doc_search');
                    }
                }
            }
        }

    },[query,page,site])





    return(
        <UrlContext.Provider value={[url,setUrl]}>
            {props.children}
        </UrlContext.Provider>
    )
}
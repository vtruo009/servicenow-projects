import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '07bbe822712f4096b8ff76ac75acf0ea'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'f33fb39479b048a78a8138ba47c5d6bc'
                    }
                }
                composite: [
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: '10602882ae3b4e3aa2d8d6942a762d62'
                        key: {
                            application_file: '17c423e9adef443a96f4a92cc7ca7389'
                            source_artifact: '25c7b0d8de6d477ca4df37034816cfb7'
                        }
                    },
                    {
                        table: 'sys_ui_page'
                        id: '17c423e9adef443a96f4a92cc7ca7389'
                        key: {
                            endpoint: 'x_2315251_req_dash_incident_manager.do'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact'
                        id: '25c7b0d8de6d477ca4df37034816cfb7'
                        key: {
                            name: 'x_2315251_req_dash_incident_manager.do - BYOUI Files'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: '65e906cca5af4d90811ce0b52f2c6914'
                        key: {
                            name: 'x_2315251_req_dash/main.js.map'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: '7fbd69d11b6e4b7899f15ab79c41640d'
                        key: {
                            name: 'x_2315251_req_dash/vendor-react-dom--55da69dc'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: '8fee26920aa94fa1a51ef9a6b4e58ed1'
                        key: {
                            application_file: '7fbd69d11b6e4b7899f15ab79c41640d'
                            source_artifact: '25c7b0d8de6d477ca4df37034816cfb7'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: 'cb9154d6831a4e7383fdc9926d522229'
                        key: {
                            application_file: 'fa5d8461be394c1990fef72b5aa15179'
                            source_artifact: '25c7b0d8de6d477ca4df37034816cfb7'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: 'f4ce447dd5ff404a912821ac3e970e52'
                        key: {
                            name: 'x_2315251_req_dash/vendor-react-dom--55da69dc.js.map'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: 'f60287f279be4383b542a879afbd877e'
                        key: {
                            application_file: 'f4ce447dd5ff404a912821ac3e970e52'
                            source_artifact: '25c7b0d8de6d477ca4df37034816cfb7'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: 'fa5d8461be394c1990fef72b5aa15179'
                        key: {
                            name: 'x_2315251_req_dash/main'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: 'fd695afb7e3942499c2f82993d0c1e27'
                        key: {
                            application_file: '65e906cca5af4d90811ce0b52f2c6914'
                            source_artifact: '25c7b0d8de6d477ca4df37034816cfb7'
                        }
                    },
                ]
            }
        }
    }
}

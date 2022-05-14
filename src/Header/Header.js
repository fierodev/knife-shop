import '../App.css';
import React, { useState, useRef } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { SplitButton } from 'primereact/splitbutton';
import { Toast } from 'primereact/toast';
import Calendar from '../Calendar/Calendar';
import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils';
import { Menubar } from 'primereact/menubar';


function Header(){

    //  const items = [
    //     {
    //         label: 'File',
    //         icon: 'pi pi-fw pi-file',
    //         items: [
    //             {
    //                 label: 'New',
    //                 icon: 'pi pi-fw pi-plus',
    //                 items: [
    //                     {
    //                         label: 'Bookmark',
    //                         icon: 'pi pi-fw pi-bookmark'
    //                     },
    //                     {
    //                         label: 'Video',
    //                         icon: 'pi pi-fw pi-video'
    //                     },

    //                 ]
    //             },
    //             {
    //                 label: 'Delete',
    //                 icon: 'pi pi-fw pi-trash'
    //             },
    //             {
    //                 separator: true
    //             },
    //             {
    //                 label: 'Export',
    //                 icon: 'pi pi-fw pi-external-link'
    //             }
    //         ]
    //     },
    //     {
    //         label: 'Edit',
    //         icon: 'pi pi-fw pi-pencil',
    //         items: [
    //             {
    //                 label: 'Left',
    //                 icon: 'pi pi-fw pi-align-left'
    //             },
    //             {
    //                 label: 'Right',
    //                 icon: 'pi pi-fw pi-align-right'
    //             },
    //             {
    //                 label: 'Center',
    //                 icon: 'pi pi-fw pi-align-center'
    //             },
    //             {
    //                 label: 'Justify',
    //                 icon: 'pi pi-fw pi-align-justify'
    //             },

    //         ]
    //     },
    //     {
    //         label: 'Users',
    //         icon: 'pi pi-fw pi-user',
    //         items: [
    //             {
    //                 label: 'New',
    //                 icon: 'pi pi-fw pi-user-plus',

    //             },
    //             {
    //                 label: 'Delete',
    //                 icon: 'pi pi-fw pi-user-minus',

    //             },
    //             {
    //                 label: 'Search',
    //                 icon: 'pi pi-fw pi-users',
    //                 items: [
    //                     {
    //                         label: 'Filter',
    //                         icon: 'pi pi-fw pi-filter',
    //                         items: [
    //                             {
    //                                 label: 'Print',
    //                                 icon: 'pi pi-fw pi-print'
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         icon: 'pi pi-fw pi-bars',
    //                         label: 'List'
    //                     }
    //                 ]
    //             }
    //         ]
    //     },
    //     {
    //         label: 'Events',
    //         icon: 'pi pi-fw pi-calendar',
    //         items: [
    //             {
    //                 label: 'Edit',
    //                 icon: 'pi pi-fw pi-pencil',
    //                 items: [
    //                     {
    //                         label: 'Save',
    //                         icon: 'pi pi-fw pi-calendar-plus'
    //                     },
    //                     {
    //                         label: 'Delete',
    //                         icon: 'pi pi-fw pi-calendar-minus'
    //                     }
    //                 ]
    //             },
    //             {
    //                 label: 'Archieve',
    //                 icon: 'pi pi-fw pi-calendar-times',
    //                 items: [
    //                     {
    //                         label: 'Remove',
    //                         icon: 'pi pi-fw pi-calendar-minus'
    //                     }
    //                 ]
    //             }
    //         ]
    //     },
    //     {
    //         label: 'Quit',
    //         icon: 'pi pi-fw pi-power-off'
    //     }
    // ];

    // const start = <img alt="logo" src="showcase/images/logo.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} height="40" className="mr-2"></img>;
    // const end = <InputText placeholder="Search" type="text" />;

    // return (
    //     <div>
    //         <img className="Header-img" src="https://www.offgridknives.com/product_images/uploaded_images/best-combat-knives-banner.jpg" alt="img-header"></img> 
    //         <div className="card" >
    //             <Menubar model={items} start={start} end={end}  style={{color:"white", background:"rgb(37, 35, 35)"}}/>
    //         </div>
    //     </div>
    // );}

    const [search, setSearch] = useState('');

    const toast = useRef(null);
    const items = [
        {
            label: 'Catalog',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://facebook.github.io/react/'
            }
        },
        {   label: 'Upload',
            icon: 'pi pi-upload',
            command: () => {
                window.location.hash = "/fileupload"
            }
        }
    ];

    return(
        <div>
             <div className="App-header"> 
                <img className="App-logo"src="https://www.logolynx.com/images/logolynx/92/92de8267be4915e4511001c5c1fee689.jpeg" alt="logo" style={{paddingBottom: "7px"}}></img>
                <div className='Header-block'>
                <div className='botton-block'>
                    <Button label="Sign In" className="p-button-raised p-button-secondary p-button-text" style={{color:"white", background:"gray"}}/>
                    <Button label="Create Account" className="p-button-raised p-button-secondary p-button-text" style={{color:"white", background:"gray"}} /> 
                    <span className="p-input-icon-left">
                        <i className="pi pi-search" />
                        <InputText value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search" />
                    </span>
                </div>
                <div>
                    <span>
                        <Toast ref={toast} ></Toast>
                        <SplitButton label="Secondary" model={items} className="p-button-raised p-button-secondary  mr-2 mb-2" style={{width: "30%",color:"white", background:"gray"}}></SplitButton>    
                    </span>         
                    <Button label="Sign In" className="p-button-raised p-button-secondary p-button-text" style={{width: "30%",color:"white", background:"gray", marginBottom:"8px"}}/>
                    <Button label="Sign In" className="p-button-raised p-button-secondary p-button-text" style={{width: "30%",color:"white", background:"gray", marginBottom:"8px"}}/>
                </div>
                </div>
            </div>
            {/* <img className="Header-img" src="https://www.offgridknives.com/product_images/uploaded_images/best-combat-knives-banner.jpg" alt="img-header"></img> */}
        </div>
    )
};

export default Header;
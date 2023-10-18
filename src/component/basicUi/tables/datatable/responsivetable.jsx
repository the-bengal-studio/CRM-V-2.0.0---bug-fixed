import React, { Component } from 'react';
import { ReactTabulator } from "react-tabulator";
import { data, columns } from '../../../../common/TableData';

class Home extends Component {

    state = {
        data: [],
        selectedName: ""
    };
    ref = null;

    rowClick = (e, row) => {
        this.setState({ selectedName: row.getData().name });
    };

    setData = () => {
        this.setState({ data });
    };

    clearData = () => {
        this.setState({ data: [] });
    }
    render() {
        const options = {
            height: 300,
            movableRows: true,
            selectable: true,
            rowClick: (e, row) => {

                this.setState({ selectedName: row.getData().name });
            },
            selectableCheck: function (row) {
                return row.getData().color !== "yellow"; //allow selection of rows where the age is greater than 18
            },
            rowSelectionChanged: function (data, rows) {
                // console.log("selected rows:", rows);
            }
        }

        return (
            <>
                <div className="box-body space-y-3">
                    <div className='sortable-input '>Selected Name: <p>{this.state.selectedName}</p></div>
                    <div className="overflow-hidden table-bordered">
                        <div>
                            <ReactTabulator  columns={columns}options={{pagination: 'local',
										paginationSize: 10,
										paginationSizeSelector: [10, 20, 50, 100], // Define available page sizes
										paginationInitialPage: 1,
										paginationButtonCount: 5, // Number of pagination buttons to display
										paginationDataReceived: { last_page: 1 },
										paginationDataSent: { page: 1, size: 10 }}} 
                                onRef={(r) => (this.ref = r)}
                                data={data}
                                events={{ rowClick: this.rowClick }}
                                // options={options}
                                data-custom-attr="test-custom-attribute"
                                className="ti-custom-table ti-striped-table ti-custom-table-hover"
                            />
                        </div >
                    </div>
                </div>

            </>
        );
    }
}

export default Home;
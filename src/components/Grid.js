import React from 'react';
import ODataStore from 'devextreme/data/odata/store';
import DataGrid, {
    Column,
    Grouping,
    GroupPanel,
    Pager,
    Paging,
    SearchPanel
} from 'devextreme-react/data-grid';
import { createFakeData } from "../fakerData"


const pageSizes = [10, 25, 50, 100];

const dataSourceOptions = {
    store: createFakeData(10)
};


class Grid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false
        };
        this.onContentReady = this.onContentReady.bind(this);
    }
    render() {
        return (
            <DataGrid
                dataSource={dataSourceOptions}
                allowColumnReordering={true}
                showBorders={true}
                onContentReady={this.onContentReady}
            >
                <GroupPanel visible={true} />
                <SearchPanel visible={true} highlightCaseSensitive={true} />
                <Grouping autoExpandAll={false} />

                <Column dataField="name" dataType="string" />
                <Column dataField="email" dataType="string" />
                <Column dataField="username" dataType="string" />
                <Column dataField="website" dataType="string" />
                <Column dataField="address" caption="City" dataType="string" width={150} />

                <Pager allowedPageSizes={pageSizes} showPageSizeSelector={true} />
                <Paging defaultPageSize={10} />
            </DataGrid>
        );
    }

    onContentReady(e) {
        if (!this.state.collapsed) {
            e.component.expandRow(['EnviroCare']);
            this.setState({
                collapsed: true
            });
        }
    }
}

export default Grid;

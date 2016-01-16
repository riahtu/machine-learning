/**
 * data_new.jsx: append 'data_new' fieldset.
 *
 * @DataNew, must be capitalized in order for reactjs to render it as a
 *     component. Otherwise, the variable is rendered as a dom node.
 *
 * Note: this script implements jsx (reactjs) syntax.
 */

import SupplyDatasetFile from './supply_dataset_file.jsx';
import SupplyDatasetUrl from './supply_dataset_url.jsx';

var DataNew = React.createClass({
  // initial 'state properties'
    getInitialState: function() {
        return {
            value_title: null,
            value_dataset_type: '--Select--'
        };
    },
  // update 'state properties'
    changeTitle: function(event){
        this.setState({
            value_title: event.target.value_title
        });
    },
    changeDatasetType: function(event){
        this.setState({
            value_dataset_type: event.target.value_dataset_type
        });
    },
  // triggered when 'state properties' change
    render: function(){
        var SupplyDataset = this.getSupplyDataset(this.state.value_title, this.state.value_dataset_type);
        return(
            <fieldset className='fieldset-session-data-upload'>
                <legend>Data Upload</legend>
                <fieldset className='fieldset-dataset-type'>
                    <legend>Configurations</legend>
                    <p>Please save the <i>Session Name</i>, then provide dataset type</p>
                    <input type='text' name='svm_title' placeholder='Session Name' onChange={this.changeTitle} value={this.state.value_title} />
                    <select name='svm_dataset_type' autoComplete='off' onChange={this.changeDatasetType} value={this.state.value_dataset_type}>
                        <option value='' defaultValue>--Select--</option>
                        <option value='file_upload'>Upload file</option>
                        <option value='dataset_url'>Dataset URL</option>
                    </select>
                </fieldset>
            </fieldset>

            <SupplyDataset/>
        );
    },
  // call back: used for the above 'render' (return 'span' if undefined)
    getSupplyDataset: function(title, dataset_type) {
//        if (title !== null) {
            return {
                file_upload: SupplyDatasetFile,
                dataset_url: SupplyDatasetUrl
            }[dataset_type] || 'span';
        }
//    }
});

// indicate which class can be exported, and instantiated via 'require'
export default DataNew

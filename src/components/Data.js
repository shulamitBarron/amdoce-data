import React from "react";
import ModalEdit from './ModalEdit'

class Data extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            user: {}
        };
    }

    onEdit = (user) => {
        this.setState({showModal: true, user});
    };
    closeModal = () => {
        this.setState({showModal: false});
    };

    render() {
        const data = this.props.data;
        return (
            <div>
                {
                    data && data.length ?
                        <div className='row'>
                            {
                                data.map((item, i) =>
                                    <div className='col-md-4' key={i} onDoubleClick={() => this.onEdit(item)}>
                                        <div className='card'>
                                            <div className='card-header'>
                                                {item.name ? item.name : ''}
                                            </div>
                                            <div className='card-body'>
                                                <p className='card-text'>{item.email ? item.email : ''}</p>
                                                <p className='card-text'>{item.address && item.address.city ? item.address.city : ''}</p>
                                                <p className='card-text'>{item.phone ? item.phone : ''}</p>
                                                <p className='card-text'>{item.website ? item.website : ''}</p>
                                                <p className='card-text'>{item.company && item.company.name ? item.company.name : ''}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                        : null
                }
                {
                    this.state.showModal ?
                        <ModalEdit
                            user={this.state.user}
                            data={this.props.data}
                            closeModal={this.closeModal}
                            setData={this.props.setData}
                            showModal={this.state.showModal}/>
                        : null
                }
            </div>)
    }
}

export default Data;

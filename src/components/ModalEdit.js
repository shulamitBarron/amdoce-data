import React from 'react';
import {Modal} from 'react-bootstrap'

class ModalEdit extends React.Component {
    constructor(props) {
        super(props);
        let user = props.user;
        this.state = {
            user: {
                name: user.name ? user.name : '',
                email: user.email ? user.email : '',
                city: user.address && user.address.city,
                phone: user.phone ? user.phone : '',
                website: user.website ? user.website : '',
                companyName: user.company && user.company.name,
            }
        };
    }

    onSave = () => {
        const users = [...this.props.data];
        const {user} = this.state;
        const id = this.props.user.id - 1;
        users[id] = {
            ...users[id],
            ...user,
            address: {...users[id].address, city: user.city},
            company: {...users[id].company, name: user.companyName}
        };
        this.props.setData(users);
        this.props.closeModal();
    };

    setData = (e, key) => {
        this.setState({user: {...this.state.user, [key]: e.target.value}});
    };

    render() {
        const user = this.state.user;
        const {showModal} = this.props;
        return (
            <div>
                {
                    showModal && <Modal
                        id={user.id}
                        onEnter={this.onEnter}
                        show={showModal}
                        onHide={this.props.closeModal}>
                        <Modal.Header className='oModalHeader' closeButton>
                            <Modal.Title className='oModalTitle'/>
                            <div>Edit</div>
                        </Modal.Header>
                        <Modal.Body>
                            {
                                <div key={user.id}>
                                    <div className='card-body card-edit'>
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input
                                                type="text" value={user.name}
                                                className="form-control"
                                                placeholder="Enter name"
                                                onChange={(e) => this.setData(e, 'name')}/>
                                        </div>
                                        <div className="form-group">
                                            <label>Email email</label>
                                            <input
                                                type="email" value={user.email}
                                                className="form-control"
                                                placeholder="Enter email"
                                                onChange={(e) => this.setData(e, 'email')}/>
                                        </div>
                                        <div className="form-group">
                                            <label>Address</label>
                                            <input
                                                type="text" value={user.city}
                                                className="form-control"
                                                placeholder="Enter address"
                                                onChange={(e) => this.setData(e, 'city')}/>
                                        </div>
                                        <div className="form-group">
                                            <label>Phone</label>
                                            <input
                                                type="text" value={user.phone}
                                                className="form-control"
                                                placeholder="Enter phone"
                                                onChange={(e) => this.setData(e, 'phone')}/>
                                        </div>
                                        <div className="form-group">
                                            <label>WebSite</label>
                                            <input
                                                type="text" value={user.website}
                                                className="form-control"
                                                placeholder="Enter webSite"
                                                onChange={(e) => this.setData(e, 'website')}/>
                                        </div>
                                        <div className="form-group">
                                            <label>Company</label>
                                            <input
                                                type="text" value={user.companyName}
                                                className="form-control"
                                                placeholder="Enter company"
                                                onChange={(e) => this.setData(e, 'companyName')}/>
                                        </div>
                                    </div>
                                </div>
                            }
                        </Modal.Body>
                        <Modal.Footer className='oModalFooter'>
                            <button onClick={() => this.onSave(user)}>Save</button>
                        </Modal.Footer>
                    </Modal>
                }
            </div>
        )
    }
}

export default ModalEdit
import React from 'react';
import ReactDOM from 'react-dom';
import { Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, FormGroup, Label } from 'reactstrap';
import axios from 'axios';

class Example extends React.Component {
    constructor(){
        super();
        this.state = {
            words: [],
            newWordModal:false,
            newWordData:{
                name:"",
                type:"",
                extra:"",
                meaning:"",
                pronunciation:"",
                description:"",
                example:""
            },
            editWordModal:false,
            editWordData:{
                id:"",
                name:"",
                type:"",
                extra:"",
                meaning:"",
                pronunciation:"",
                description:"",
                example:""
            }
        }
    }

    // Append (change) to .state in constructor
    loadWord() {
        axios.get('http://localhost:8000/api/words').then(response => {
            this.setState({ words:response.data })
        })
    }

    // Add Word as form
    addWord() {
        axios.post('http://localhost:8000/api/word', this.state.newWordData).then((response) => {
            let { words } = this.state
            this.loadWord()
            this.setState({words, newWordModal:false, newWordData:{ name:"", type:"", extra:"", meaning:"", pronunciation:"", description:"", example:"" } })
        })
    }

    // Edit Word
    editWord(id, name, type, extra, meaning, pronunciation, description, example) {
        this.setState({
            editWordData: {
                id,
                name,
                type,
                extra,
                meaning,
                pronunciation,
                description,
                example
            },
            editWordModal: !this.state.editWordModal
        })
    }

    // Update Word using put method
    updateWord() {
        let { name, type, extra, meaning, pronunciation, description, example } = this.state.editWordData
        axios.put('http://localhost:8000/api/word/' + this.state.editWordData.id, { name, type, extra, meaning, pronunciation, description, example }).then((response)=> {
            this.loadWord()
            this.setState({
                editWordModal: false, // Close the pop up
                editWordData: {
                    id:"", name:"", type:"", extra:"", meaning:"", pronunciation:"", description:"", example:""
                }
            })
        })
    }

    // Delete Word Function
    deleteWord(id) {
        axios.delete('http://localhost:8000/api/word/' + id).then((response) => {
            this.loadWord()
        })
    }

    handleChange() {
        this.setState({ extra: event.target.value })
    }

    componentDidMount() {
        this.loadWord();
    }

    // Change newWordModal into true
    toggleNewWordModal(){
        this.setState({newWordModal: !this.state.newWordModal})
    }

    toggleEditWordModal(){
        this.setState({editWordModal: !this.state.editWordModal})
    }

    render() {
        // Return data in DB instead of hardcode
        let words = this.state.words.map((word) => {
            return(
                <tr key={word.id}>
                    <td>{word.id}</td>
                    <td>{word.name}</td>
                    <td>{word.type}</td>
                    <td>{word.extra}</td>
                    <td>{word.meaning}</td>
                    <td>{word.pronunciation}</td>
                    <td>{word.description}</td>
                    <td>{word.example}</td>
                    <td>
                        <Button
                            color="success"
                            size="sm"
                            className="mr-2"
                            onClick={this.editWord.bind(this, word.id, word.name, word.type, word.extra, word.meaning, word.pronunciation, word.description, word.example)}>Edit
                        </Button>
                        <Button
                            color="danger"
                            size="sm"
                            onClick={this.deleteWord.bind(this, word.id)}>Delete</Button>
                    </td>
                </tr>
            )
        })

        return (
            <div className="container">
                <h1>Words List</h1>
                <Button color="primary" onClick={this.toggleNewWordModal.bind(this)} className="my-3">Add Word</Button>

                {/* Add Word */}
                <Modal isOpen={this.state.newWordModal} toggle={this.toggleNewWordModal.bind(this)}>
                    <ModalHeader toggle={this.toggleNewWordModal.bind(this)}>Add Word</ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label for="name">Name</Label>
                            <Input id="name" placeholder="e.g: House" required value={this.state.newWordData.name} onChange={(e => {
                                let { newWordData } = this.state
                                newWordData.name = e.target.value
                                this.setState({ newWordData })
                            })}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="type">Type</Label>
                            <Input id="type" value={this.state.newWordData.type} onChange={(e => {
                                let { newWordData } = this.state
                                newWordData.type = e.target.value
                                this.setState({ newWordData })
                            })}></Input>
                            <small id="typeWriteHelper" className="form-text text-muted">
                                This field's value is: Noun, Verb, Adjective, Adverb.
                            </small>
                        </FormGroup>
                        <FormGroup>
                            <Label for="extra">Extra</Label>
                            <Input id="extra" value={this.state.newWordData.extra} onChange={(e => {
                                let { newWordData } = this.state
                                newWordData.extra = e.target.value
                                this.setState({ newWordData })
                            })}></Input>
                            <small id="extraWriteHelper" className="form-text text-muted">
                            This field's value is: Countable, Uncountable and Not Applicable.
                            </small>
                        </FormGroup>
                        <FormGroup>
                            <Label for="meaning">Meaning</Label>
                            <Input id="meaning" placeholder="Write in Vietnamese" value={this.state.newWordData.meaning} onChange={(e => {
                                let { newWordData } = this.state
                                newWordData.meaning = e.target.value
                                this.setState({ newWordData })
                            })}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="pronunciation">Pronunciation</Label>
                            <Input id="pronunciation" placeholder="e.g: /haʊs/" value={this.state.newWordData.pronunciation} onChange={(e => {
                                let { newWordData } = this.state
                                newWordData.pronunciation = e.target.value
                                this.setState({ newWordData })
                            })}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="description">Description</Label>
                            <Input id="description"placeholder="Describe use case for this word" type="textarea" value={this.state.newWordData.description} onChange={(e => {
                                let { newWordData } = this.state
                                newWordData.description = e.target.value
                                this.setState({ newWordData })
                            })}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="example">Example</Label>
                            <Input id="example"placeholder="Example Case for this word" type="textarea" value={this.state.newWordData.example} onChange={(e => {
                                let { newWordData } = this.state
                                newWordData.example = e.target.value
                                this.setState({ newWordData })
                            })}></Input>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.addWord.bind(this)}>Add Word</Button>{' '}
                        <Button color="secondary" onClick={this.toggleNewWordModal.bind(this)}>Cancel</Button>
                    </ModalFooter>
                </Modal>

                {/* Edit Function */}
                <Modal isOpen={this.state.editWordModal} toggle={this.toggleEditWordModal.bind(this)}>
                    <ModalHeader toggle={this.toggleEditWordModal.bind(this)}>Edit Word</ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label for="name">Name</Label>
                            <Input id="name" required value={this.state.editWordData.name} onChange={(e => {
                                let { editWordData } = this.state
                                editWordData.name = e.target.value
                                this.setState({ editWordData })
                            })}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="type">Type</Label>
                            <Input id="type" value={this.state.editWordData.type} onChange={(e => {
                                let { editWordData } = this.state
                                editWordData.type = e.target.value
                                this.setState({ editWordData })
                            })}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="extra">Extra</Label>
                            <Input id="extra" value={this.state.editWordData.extra} onChange={(e => {
                                let { editWordData } = this.state
                                editWordData.extra = e.target.value
                                this.setState({ editWordData })
                            })}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="meaning">Meaning</Label>
                            <Input id="meaning" value={this.state.editWordData.meaning} onChange={(e => {
                                let { editWordData } = this.state
                                editWordData.meaning = e.target.value
                                this.setState({ editWordData })
                            })}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="pronunciation">Pronunciation</Label>
                            <Input id="pronunciation" value={this.state.editWordData.pronunciation} onChange={(e => {
                                let { editWordData } = this.state
                                editWordData.pronunciation = e.target.value
                                this.setState({ editWordData })
                            })}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="description">Description</Label>
                            <Input id="description" type="textarea" value={this.state.editWordData.description} onChange={(e => {
                                let { editWordData } = this.state
                                editWordData.description = e.target.value
                                this.setState({ editWordData })
                            })}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="example">Example</Label>
                            <Input id="example" type="textarea" value={this.state.editWordData.example} onChange={(e => {
                                let { editWordData } = this.state
                                editWordData.example = e.target.value
                                this.setState({ editWordData })
                            })}></Input>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.updateWord.bind(this)}>Edit Word</Button>{' '}
                        <Button color="secondary" onClick={this.toggleEditWordModal.bind(this)}>Cancel</Button>
                    </ModalFooter>
                </Modal>

                {/* Table */}
                <Table striped={1} bordered={1} hover={1}>
                    <thead class="thead-dark">
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Extra</th>
                        <th>Meaning</th>
                        <th>Pronunciation</th>
                        <th>Description</th>
                        <th>Example</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {/*    <tr>*/}
                        {/*        <td>1</td>*/}
                        {/*        <td>BREAKFAST</td>*/}
                        {/*        <td>Sauce</td>*/}
                        {/*        <td>*/}
                        {/*            <Button color="success" size="sm" className="mr-2">Edit</Button>*/}
                        {/*            <Button color="danger" size="sm">Delete</Button>*/}
                        {/*        </td>*/}
                        {/*    </tr>*/}
                        {words}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}

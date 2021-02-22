import React from 'react'

const UpdatedComponent = (OriginalComponent, incrementNumber) => {
    class NewComponent extends React.Component {
        constructor(props) {
            super(props)
        
            this.state = {
                 Count: 0
            }
        }
    
        incrementCount = () => {
            this.setState(prevState => {
                return {Count: prevState.Count + incrementNumber}
            })
        }
    
        render() {
            return <OriginalComponent Count={this.state.Count} incrementCount={this.incrementCount} {...this.props}/>
        }
    }
    return NewComponent
}

export default UpdatedComponent

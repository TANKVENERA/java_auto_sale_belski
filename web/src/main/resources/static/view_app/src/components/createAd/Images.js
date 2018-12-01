import React, {Component} from 'react'
import {updateImages, imageDeleted} from '../../actions/index';
import {connect} from '../../../node_modules/react-redux';
import '../../static/imagesCreateAd.css'
import ReactDropzone from '../../../node_modules/react-dropzone';
import isOK from '../../static/icons/isOk.png';
import deleteIcon from '../../static/icons/deleteIcon.png';

const dropZone = {
    width: '100%',
    minHeight: 300,
    border: '2px solid red'
};

const MapStateToProps = (state) => {
    return {
        images: state.createAdParams.images
    }
};

const MapDispatchToProps = (dispatch) => {
    return {
        updateImages: images => dispatch(updateImages(images)),
        imageDeleted: index => dispatch(imageDeleted(index))
    }
};

const ImgIsOk = (
    <img alt="" className="isOk" src={isOK}/>
);


const dropzoneRef = React.createRef();

class Images extends Component {
    constructor(props) {
        super(props);

        this.state = {
            files: [],
            imgIndex: '',
            text: '',
            hoverImgIndex: '',
            i : 0
        };
    }

    onMouseSetText = (hoverIndex) => {
        console.log('lalalaA', hoverIndex);
        this.setState({
            text: 'Сделать главной',
            hoverImgIndex: hoverIndex
        })
    };

    onMouseClearText = (e) => {
        this.setState({text: '', hoverImgIndex: ''})
    };

    onPreviewDrop = (file) => {
        console.log('INDEX', file.length,  'BLOB', this.props.images);
        this.props.updateImages(file.map((file, index) => ({
            ...file, index: index + this.state.i, preview: URL.createObjectURL(file)
        })))
        this.setState({i: this.state.i + file.length})
    };

    handleImageClicked = (index) => {
        this.setState({imgIndex: index})
    };

    handleImageDeleted = (index) => {
        this.props.imageDeleted(index)
    };

    render() {
        return (
            <div>
                <ReactDropzone
                    ref={dropzoneRef}
                    disableClick
                    style={dropZone}
                    accept="image/*"
                    maxSize={5000000}
                    onDrop={this.onPreviewDrop}
                >
                    <div>
                        <button type="button" className="upload-img-btn" onClick={() => dropzoneRef.current.open()}>
                            Загрузить фотографии
                        </button>
                    </div>
                    {this.props.images.length > 0 &&
                    <div>
                        {this.props.images.filter(element => element.preview !== '').map(img => (
                            <div className={img.index === this.state.imgIndex ? 'image-active' : 'image'}
                                 onClick={() => this.handleImageClicked(img.index)}
                                 key={img.index}>
                                {img.index === this.state.imgIndex ? ImgIsOk : ''}
                                <div className={img.index === this.state.hoverImgIndex ? 'warning-active' : 'warning'}>
                                    {img.index === this.state.hoverImgIndex &&
                                    img.index !== this.state.imgIndex ? this.state.text : ''}
                                </div>
                                <div style={{display: 'inline-flex', position: 'relative'}}>
                                    <div onMouseEnter={() => this.onMouseSetText(img.index)}
                                         onMouseLeave={this.onMouseClearText}>
                                        <img alt=""
                                             src={img.preview}
                                             className={img.index === this.state.hoverImgIndex &&
                                             img.index !== this.state.imgIndex ? 'img-view-warning-active' : 'img-view'}
                                        />
                                    </div>
                                    <div>
                                        <img alt=""
                                             className="delete-icon"
                                             src={deleteIcon}
                                             onClick={() => this.handleImageDeleted(img.index)}/>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    }
                </ReactDropzone>
            </div>
        )
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(Images)
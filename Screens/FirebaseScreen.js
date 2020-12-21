import React, {Component} from 'react';
import {Button, Image, Text, View} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';

export default class FirebaseScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uri: '',
      isDone: false,
      loading: false,
      process: 0,
    };
    this.onPress = this.onPress.bind(this);
  }

  componentDidMount() {
    this.fetchApi();
  }

  componentDidUpdate(_, prevStates) {
    if (prevStates.uri !== this.state.uri) {
      this.fetchApi;
    }
  }

  fetchApi() {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'octet-stream');
    myHeaders.append(
      'Authorization',
      'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImEzck1VZ01Gdjl0UGNsTGE2eUYzekFrZnF1RSIsImtpZCI6ImEzck1VZ01Gdjl0UGNsTGE2eUYzekFrZnF1RSJ9.eyJpc3MiOiJodHRwczovL2luc2lnaHQuZmlzLmNvbS52bi8iLCJhdWQiOiJodHRwczovL2luc2lnaHQuZmlzLmNvbS52bi9yZXNvdXJjZXMiLCJleHAiOjE2MDg0MzgwNTcsIm5iZiI6MTYwODQwMjA1NywiY2xpZW50X2lkIjoiQ1JNX0Rldl9BUEkiLCJzY29wZSI6Im9wZW5pZCIsInN1YiI6Im5nYW50dDk3IiwiYXV0aF90aW1lIjoxNjA4NDAyMDU3LCJpZHAiOiJpZHNydiIsIm5hbWUiOiJuZ2FudHQ5NyIsImVtYWlsIjoiTmdhblRUOTdAZnB0LmNvbS52biIsImFtciI6WyJwYXNzd29yZCJdfQ.ci_0o8mQ_AjvihC9tD0RCAEL6VeX_7OmzWX7xuo4Ll9J9USE6HNSlEZNfyTjfmtJdox8wtqm0iQFnVKDYzrvghzXpzLcV4q_yq53Lc-RoQPnEC7m_Ig-54IWbii289t2izhm6icFGkoAIwkfqQyun1aX9fZBelmg20e-YjaXKU9C_nuYV5r1fgz2ItDX9510H_DFz-wl69opoJweozJ1pe9adRzHHacROxBHn40DeZ96eZJcaZsevT75sh4uQGT-kNAee1aemND4-jq4-w6WgPSZEvI-1ozjwNIZYepLBTKYOwHN90unrAEbLVTmz8velIImANigsOUOgXCMVgrjSA',
    );

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    fetch(
      'http://10.15.168.163:7990/api/api/public/FileUpload/DownloadFileAttached?fileUploadId=30031',
      requestOptions,
    )
      .then((response) => response.valueOf())
      .then((result) => {
        console.log(result);
        // const fileReaderInstance = new FileReader();
        // fileReaderInstance.readAsDataURL(result);
        // fileReaderInstance.onload = () => {
        //   console.log(fileReaderInstance.result);
        //   this.setState({uri: fileReaderInstance.result});
        // };
      })
      .catch((error) => console.log('error', error));
  }

  onPress = () => {
    // RNFS.downloadFile({
    //   fromUrl: this.state.uri,
    //   toFile: `${RNFS.DocumentDirectoryPath}/react-native.png`,
    // }).promise.then((r) => {
    //   this.setState({isDone: true});
    // });
    const {
      dirs: {DownloadDir, DocumentDir},
    } = RNFetchBlob.fs;
    const {config} = RNFetchBlob;
    const isIOS = Platform.OS === 'ios';
    const aPath = Platform.select({ios: DocumentDir, android: DownloadDir});
    var img_URL = '';
    var ext = 'png';
    var file_ex = 'reactnative.png';
    const fPath = `${aPath}/${file_ex}`;
    const configOptions = Platform.select({
      ios: {fileCache: true, path: fPath, appendExt: ext},
      android: {
        fileCache: false,
        appendExt: ext,
        addAndroidDownloads: {
          useDownloadManager: true,
          notification: true,
          path: aPath + '/' + file_ex,
          description: 'Image',
        },
      },
    });
    if (isIOS) {
      this.setState({loading: true, progress: 0});
      RNFetchBlob.config(configOptions)
        .fetch('GET', img_URL, {
          'Content-Type': 'application/octet-stream',
        })
        .then((res) => {
          console.log(res);
          this.setState({loading: false});
          RNFetchBlob.ios.previewDocument('file://' + res.path());
        });
      return;
    } else {
      this.setState({loading: true});
      config(configOptions)
        .fetch('GET', img_URL, {
          'Content-Type': 'application/octet-stream',
        })
        .progress((received, total) => {
          console.log('progress', received / total);
          this.setState({progress: received / total});
        })
        .then((res) => {
          console.log(res);
          this.setState({loading: false, progress: 100});
          RNFetchBlob.android.actionViewIntent(res.path());
        });
    }
  };

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
        <Image
          style={{width: 100, height: 100}}
          source={{
            uri: this.state.uri,
          }}
        />
        <Button title="Down" onPress={this.onPress} />
      </View>
    );
  }
}

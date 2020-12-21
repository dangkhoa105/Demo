import React, {Component} from 'react';
import {Button, Image, Text, View} from 'react-native';
import RNFS from 'react-native-fs';
import RNFetchBlob from 'rn-fetch-blob';

export default class PanButton extends Component {
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
    myHeaders.append(
      'Authorization',
      'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImEzck1VZ01Gdjl0UGNsTGE2eUYzekFrZnF1RSIsImtpZCI6ImEzck1VZ01Gdjl0UGNsTGE2eUYzekFrZnF1RSJ9.eyJpc3MiOiJodHRwczovL2luc2lnaHQuZmlzLmNvbS52bi8iLCJhdWQiOiJodHRwczovL2luc2lnaHQuZmlzLmNvbS52bi9yZXNvdXJjZXMiLCJleHAiOjE2MDg1NTM0MTgsIm5iZiI6MTYwODUxNzQxOCwiY2xpZW50X2lkIjoiQ1JNX0Rldl9BUEkiLCJzY29wZSI6Im9wZW5pZCIsInN1YiI6Im5nYW50dDk3IiwiYXV0aF90aW1lIjoxNjA4NTE3NDE4LCJpZHAiOiJpZHNydiIsIm5hbWUiOiJuZ2FudHQ5NyIsImVtYWlsIjoiTmdhblRUOTdAZnB0LmNvbS52biIsImFtciI6WyJwYXNzd29yZCJdfQ.PQ9IySM8JOxGNo41Kfz2S28Sa5sFbpYyqvI-imfWzDRC_CITmGz8ck6kFpuDNl6YNUTfxizofmgGG2s0hHvMhmmX2hy-pIBlbtzmey8wvpkNzQN8iRp3XrzuWhR5PlIUlUg2NrOXacgCq66egmpjo5eDGBoFSc4vWNLXHUyQocHRFljkFJaBI8zioWr2yv5Ssy2cZA1nGiY8zHClmPQlkzu8IxKIo-kCCznd3rRFTTgAk0Pj66uVkSgKL8AYd4BPXhc5_d_0OmUAhhCyPirULXLZIrR48zxaDkbat-XbhvnFWzT5rZ4mVZCOphuFqfaMcA9vaNmvIAEazj_X3vyfuA',
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
      .then((response) => response.blob())
      .then((result) => {
        const fileReaderInstance = new FileReader();
        fileReaderInstance.readAsDataURL(result);
        fileReaderInstance.onload = () => {
          // console.log(fileReaderInstance.result);
          // let t = fileReaderInstance.result.split(';');
          // let a = t[1].split(',');
          this.setState({uri: fileReaderInstance.result});
          // var blob = new Blob([a[1]], 'png');
          // var url = URL.createObjectURL(blob);
          // console.log(url);
        };
      })
      .catch((error) => console.log('error', error));
  }

  onPress = () => {
    const {
      dirs: {DownloadDir, DocumentDir},
    } = RNFetchBlob.fs;
    const {config} = RNFetchBlob;
    const isIOS = Platform.OS === 'ios';
    const aPath = Platform.select({ios: DocumentDir, android: DownloadDir});
    var img_URL = '';
    var ext = 'png';
    var file_ex = 'Hihi.png';
    const fPath = `${aPath}/${file_ex}`;
    const configOptions = Platform.select({
      ios: {fileCache: true, path: fPath, appendExt: ext},
      android: {
        fileCache: true,
        appendExt: ext,
        addAndroidDownloads: {
          useDownloadManager: true,
          notification: true,
          path: aPath + '/' + file_ex,
          description: 'IMAGE',
        },
      },
    });
    RNFetchBlob.config(configOptions)
      .fetch(
        'GET',
        'http://10.15.168.163:7990/api/api/public/FileUpload/DownloadFileAttached?fileUploadId=30031',
        {
          Authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImEzck1VZ01Gdjl0UGNsTGE2eUYzekFrZnF1RSIsImtpZCI6ImEzck1VZ01Gdjl0UGNsTGE2eUYzekFrZnF1RSJ9.eyJpc3MiOiJodHRwczovL2luc2lnaHQuZmlzLmNvbS52bi8iLCJhdWQiOiJodHRwczovL2luc2lnaHQuZmlzLmNvbS52bi9yZXNvdXJjZXMiLCJleHAiOjE2MDg1NTM0MTgsIm5iZiI6MTYwODUxNzQxOCwiY2xpZW50X2lkIjoiQ1JNX0Rldl9BUEkiLCJzY29wZSI6Im9wZW5pZCIsInN1YiI6Im5nYW50dDk3IiwiYXV0aF90aW1lIjoxNjA4NTE3NDE4LCJpZHAiOiJpZHNydiIsIm5hbWUiOiJuZ2FudHQ5NyIsImVtYWlsIjoiTmdhblRUOTdAZnB0LmNvbS52biIsImFtciI6WyJwYXNzd29yZCJdfQ.PQ9IySM8JOxGNo41Kfz2S28Sa5sFbpYyqvI-imfWzDRC_CITmGz8ck6kFpuDNl6YNUTfxizofmgGG2s0hHvMhmmX2hy-pIBlbtzmey8wvpkNzQN8iRp3XrzuWhR5PlIUlUg2NrOXacgCq66egmpjo5eDGBoFSc4vWNLXHUyQocHRFljkFJaBI8zioWr2yv5Ssy2cZA1nGiY8zHClmPQlkzu8IxKIo-kCCznd3rRFTTgAk0Pj66uVkSgKL8AYd4BPXhc5_d_0OmUAhhCyPirULXLZIrR48zxaDkbat-XbhvnFWzT5rZ4mVZCOphuFqfaMcA9vaNmvIAEazj_X3vyfuA',
          'Content-Type': 'octet-stream',
        },
        this.state.uri,
      )
      .then((res) => {
        // the temp file path
        console.log('The file saved to ', res.path());
        // RNFetchBlob.android.actionViewIntent(res.path());
      });
  };

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
        <Image
          style={{width: 100, height: 100}}
          source={{uri: this.state.uri}}
        />
        <Button title="Down" onPress={this.onPress} />
      </View>
    );
  }
}

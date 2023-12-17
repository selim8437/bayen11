import { Component } from '@angular/core';
import { DataSharingService } from 'src/app/services/data-sharing.service';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.css'],
})
export class ImageUploaderComponent {
  selectedImage: File | null = null;
  outputFolder: string = '/assets';
  constructor(private dataSharingService: DataSharingService){

  }
  onFileSelected(event: any) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.selectedImage = fileList[0];
    }
  }

  uploadImage() {
    if (!this.selectedImage || !this.outputFolder) {
      console.error('Please select an image and provide an output folder.');
      return;
    }

   

    console.log(`Image uploaded successfully to ${this.outputFolder}`);
  }
}

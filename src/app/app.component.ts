import { Component, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HAND_IMAGE } from './images/hand';
import { FLOWER_IMAGE } from './images/flower';
import { AiaImageAnnotatorComponent, AngularImageAnnotatorModule } from '@nx-angular-image-annotator/aia';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [RouterModule, FormsModule, AngularImageAnnotatorModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  base64Image = FLOWER_IMAGE;
  public strokeColor = '#000';
  public fontSize = '20px';
  public fontFamily = 'Georgia';

  @ViewChild('annotator') annotator!: AiaImageAnnotatorComponent;

  public getAnnotatedImage() {
    const annotatedImageURI = this.annotator.getAnnotatedImage();
    const downloadURL = annotatedImageURI.replace(/^data:image\/[^;]+/, 'data:application/octet-stream');
    window.open(downloadURL);

  }

  public changeImage(event: any) {
    const image = event.target.value
    if (image === 'flower') {
      this.base64Image = FLOWER_IMAGE;
    } else {
      this.base64Image = HAND_IMAGE;
    }
  }

  public pencilTool() {
    this.annotator.setTool('pencil');
  }

  public textTool() {
    this.annotator.setTool('text');
  }

  public undo() {
    this.annotator.undo();
  }

  public redo() {
    this.annotator.redo();
  }

  public clear() {
    this.annotator.clear();
  }
}

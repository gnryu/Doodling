# Doodling
### Jan 3, 2023 ~ Feb 9, 2023
## Purpose of the Development
Most people take notes while studying. However, 1 in 10 people worldwide have dyslexia, which makes it difficult for them to study. Therefore, this project was carried out in the hope that it would help students with dyslexia to study through a web application that converts sentences into pictures.
## Requirements
-	Apply a good UX design using React  
  -	Search function using tags  
  -	Save multiple images at one note  
  -	Save text and image at the same time  
-	Take convenient and useful notes  
  -	Fast generative image using text  
  -	Generate accurate and simple image  
  -	Change the image if the user doesn't like it  

## User Experience
- The user proceeds to log in.  
- Users can create new notes or browse previously created notes.  
  - If user make new note, 
    - Click the new note button and they cant set tags and type the notes.
    - If they wanted to convert text to image, it can be executed by dragging a letter and designating it as a block and pressing the convert button.
    - If they like the result of image, they can download it. If they doesn't they cant change the image.
    - if you click the saved image, there are text and the image at the same page
  - If user wants to browse notes,
     - They can just click the dark button which they want to browse.
     - They can see the kext notes on the left side and image notes in the right.
     - If the user click the image, the image pops up with text.
  - If the user wants to delete notes, there are two ways to delete it.
    - Click the trash button on the browsing page.
    - Click the trash button on the note page.

## Validation Model
As a result of generating 5 images for 5 sentences and conducting a survey to 36 people, an average score was recorded as 3.6 out of 5 indicating that the performance of the model was not bad but it is not good enough. In the future, additional learning is planned to improve the performance of the model.

## Publish
Since the web page runs only locally, you must download and run the entire file. We plan to distribute it through the server in the future.

## Distribution of roles
#### Gina Ryu : Back-end Developer
-	Flask  
-	Fire Base  
#### Jimin Lee : Deep Learning model Developer
-	Keras  
-	Pytorch
#### Jiyeon Lee : Deep Learning model Developer
-	Keras  
-	Pytorch
#### Yooshin Kim
-	React  
-	Fire Base

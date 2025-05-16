
![](https://www.youtubeeducation.com/watch?v=GOlxhBRlZe8)

This Arduino setup is a simple project involving phototransistors and a tri-colour LED light. There are three phototransistors, each covered by a thin coloured film (red, green, and blue respectively). This is to independently measure levels of red, green, and blue light. The light levels are recorded and given integer values from 0 to 375 (to account for regular light levels) and then scaled to fit the parameters of analogWrite(): from 255 to 0. The scaling using map() is done from 255 to 0 rather than from 0 to 255 so that greater measured light levels correspond with a lesser light level to be emitted from the LEDs.  

The end behaviour is such that if the recorded light level is >= 375(on a scale of 0 to 1023), the light diodes remain off, and then smoothly brighten as light levels reduce to 0.   

This is a proof of concept; with proper materials, light diffusion, more practical LED colours and sensors, and a structure, everything needed for a programmable night-light is present.  


[Code]([triakshal/R_G_B_nlamp_test: Simple Arduino photosensitive LED nightlamp.](https://github.com/triakshal/R_G_B_nlamp_test))

#projects #arduino
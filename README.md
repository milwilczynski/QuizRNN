# React-Native Navigation template
So, it's just a RNN template. Made to be used in future projects. 

# Things u must knew
You need to have JDK 1.8 - some bugs may occur if you will try to use another versions.
File /android/gradle.properties do not have JAVA dir path. You should create JAVA_HOME path.

Linux:
in $HOME/.bashrc

Windows:
https://stackoverflow.com/questions/2619584/how-to-set-java-home-on-windows-7

or just simple add following line to gradle.properties:
org.gradle.java.home=&YOURDIR& - for example: org.gradle.java.home=C:\\Program Files\\Java\\jdk1.8.0_181

# How to use
1. git clone
2. cd react_native_navigation_template
3. npm install
4. npm run android
5. react-native start

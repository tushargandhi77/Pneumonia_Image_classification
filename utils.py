import os
import random
import numpy as np
from keras.preprocessing.image import ImageDataGenerator
import tensorflow as tf
from tensorflow import keras
from keras import Sequential
from keras.layers import Conv2D,MaxPool2D,BatchNormalization,Dropout,Flatten,Dense,GlobalAveragePooling2D
from tensorflow.keras.applications import MobileNetV2


def create_data_generators(target_size=(150, 150), batch_size=10, class_mode='binary'):
    """
    Create image data generators for training and testing.

    Parameters:
    - data_dir (str): Path to the directory containing the training and testing data.
    - target_size (tuple): Tuple representing the height and width to which all images will be resized.
    - batch_size (int): Size of the batches of data.
    - class_mode (str): One of 'binary' or 'categorical'. Default is 'binary'.

    Returns:
    - train_generator (DirectoryIterator): Generator for training data.
    - test_generator (DirectoryIterator): Generator for testing data.
    """

    train_datagen = ImageDataGenerator(
        rescale=1./255,
        shear_range=0.2,
        zoom_range=0.2,
        horizontal_flip=True
    )

    test_datagen = ImageDataGenerator(rescale=1./255)

    train_generator = train_datagen.flow_from_directory(
        'train',
        target_size=target_size,
        batch_size=batch_size,
        class_mode=class_mode
    )

    test_generator = test_datagen.flow_from_directory(
        'test',
        target_size=target_size,
        batch_size=batch_size,
        class_mode=class_mode
    )

    return train_generator, test_generator


def create_model(input_shape=(150, 150, 3),hidden_layers = 32):
    """
    Create a convolutional neural network model.

    Parameters:
    - input_shape (tuple): Shape of the input data (height, width, channels). Default is (150, 150, 3).

    Returns:
    - model (Sequential): Compiled Keras model.
    """

    model = Sequential()

    model.add(Conv2D(hidden_layers,kernel_size=(3,3),padding='valid',activation='relu',input_shape=input_shape))
    model.add(BatchNormalization())
    model.add(MaxPool2D(pool_size=(2,2),strides=2,padding='valid'))

    model.add(Conv2D(hidden_layers,kernel_size=(3,3),padding='valid',activation='relu'))
    model.add(BatchNormalization())
    model.add(MaxPool2D(pool_size=(2,2),strides=2,padding='valid'))

    model.add(Conv2D(hidden_layers,kernel_size=(3,3),padding='valid',activation='relu'))
    model.add(BatchNormalization())
    model.add(MaxPool2D(pool_size=(2,2),strides=2,padding='valid'))

    model.add(Flatten())

    model.add(Dense(128,activation='relu'))
    model.add(Dropout(0.3))
    model.add(Dense(1,activation='sigmoid'))

    return model


def create_transfer_learning_model(input_shape=(150, 150, 3), base_model=None, dropout_rate=0.3, num_classes=1):
    """
    Create a transfer learning model using a pre-trained base model.

    Parameters:
    - input_shape (tuple): Shape of the input data (height, width, channels). Default is (150, 150, 3).
    - base_model: Pre-trained base model. If None, it uses MobileNetV2.
    - dropout_rate (float): Dropout rate. Default is 0.3.
    - num_classes (int): Number of output classes. Default is 1.

    Returns:
    - model (Sequential): Compiled Keras model.
    """

    if base_model is None:
        base_model = MobileNetV2(input_shape=input_shape, include_top=False, weights='imagenet')

    model = Sequential()

    model.add(base_model)
    model.add(GlobalAveragePooling2D())
    model.add(Dense(128, activation='relu'))
    model.add(Dropout(dropout_rate))
    model.add(Dense(1, activation='sigmoid'))  


    return model


def compile_and_fit_model(model, train_generator, test_generator, epochs=10, steps_per_epoch=None, validation_steps=None):
    """
    Compile and fit the given Keras model using the specified generators.

    Parameters:
    - model: Keras model to be compiled and fit.
    - train_generator: Generator for training data.
    - test_generator: Generator for testing data.
    - epochs (int): Number of epochs for training. Default is 10.
    - steps_per_epoch (int): Number of steps (batches) to be processed in each epoch. Default is None.
    - validation_steps (int): Number of steps (batches) to be processed in each validation epoch. Default is None.
    """

    model.compile(loss='binary_crossentropy', optimizer='adam', metrics=['accuracy'])

    model.fit(
        train_generator,
        steps_per_epoch=steps_per_epoch,
        epochs=epochs,
        validation_data=test_generator,
        validation_steps=validation_steps
    )


def save_model(model, filename='mymodel.h5'):
    """
    Save the Keras model to a file.

    Parameters:
    - model: Keras model to be saved.
    - filename (str): Name of the file to save the model to.
    """
    model.save(filename)
    print(f"Saved model as {filename}")

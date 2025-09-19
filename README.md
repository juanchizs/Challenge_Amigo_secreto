# Challenge_Amigo_secreto

A simple web application that allows users to create a list of friends and randomly select one as a "Secret Friend".

## Features

- Add friends to a list
- Input validation for friend names
- Random selection of a secret friend
- Real-time display of the friends list
- Immediate feedback for invalid inputs

## Input Validation Rules

The application implements the following validation rules for friend names:
- Names cannot be empty
- Names can only contain letters and spaces (no numbers or special characters)

## Functions

### `agregarAmigo()`
Adds a new friend to the list with the following behavior:
- Validates the input
- Shows error messages for invalid inputs
- Appends the new name to the existing list
- Clears the input field after successful addition

### `sortearAmigo()`
Randomly selects a friend from the list and:
- Displays the selected friend's name
- Updates the title to show it's a winner
- Logs the selection to the console

## Usage

1. Enter a friend's name in the input field
2. Click the add button to add the friend to the list
3. Repeat steps 1-2 to add more friends
4. Click the draw/sort button to randomly select a secret friend

## HTML Requirements

The application expects the following HTML elements with specific IDs:
- `nuevoamigo`: Input field for new friend's name
- `listaAmigos`: Element to display the list of friends
- `resultado`: Element to display the selected friend
- `titulo`: Element for the title/header text

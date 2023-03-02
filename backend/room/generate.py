import string
import random


def generate_room_code(size=7):
    chars = list(set(string.ascii_letters + string.digits))
    return ''.join(random.choices(chars, k=size))


def generate_theme_color():
    random_number = random.randint(0, 8)

    match random_number:
        case 1:
            return 'blue'
        case 2:
            return 'green'
        case 3:
            return 'pink'
        case 4:
            return 'orange'
        case 5:
            return 'turquoise'
        case 6:
            return 'purple'
        case 7:
            return 'cyan'
        case _:
            return 'grey'


def generate_cover():
    random_number = random.randint(0, 9)
    cover = 'media/cover/'

    match random_number:
        case 1:
            cover += 'backtoschool.jpg'
        case 2:
            cover += 'bookclub.jpg.jpg'
        case 3:
            cover += 'breakfast.jpg.jpg'
        case 4:
            cover += 'code.jpg.jpg'
        case 5:
            cover += 'graduation.jpg.jpg'
        case 6:
            cover += 'honors.jpg.jpg'
        case 7:
            cover += 'learnlanguage.jpg.jpg'
        case 8:
            cover += 'reachout.jpg.jpg'
        case _:
            cover += 'read.jpg.jpg'

    return cover

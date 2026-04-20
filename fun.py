import os
import time
import webbrowser

jmeno = input("Jak se jmenuješ: ")

video = "https://www.youtube.com/watch?v=GXlckaGr0Eo"
video2 = "https://www.youtube.com/watch?v=eOKfPyTqrqE"
video3 = "https://www.youtube.com/watch?v=iaAHtJXHBFs&"
print(f"Ne nejseš {jmeno} ty kreténe")

time.sleep(3)

print("Chceš si chvíli odpočinout?")
answer = input()

if answer == "ano":
    print(f"Otevíram ti {video} na youtube pro nejlepší relax...")
    time.sleep(2)
    webbrowser.open(video)
else:
    print("To jsi posral")
    time.sleep(2)
    webbrowser.open(video3)
    while True:
        time.sleep(0.5)
        webbrowser.open(video2)
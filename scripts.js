
document.addEventListener('DOMContentLoaded', function() {
    const codeExamples = [
        {
            id: 1,
            title: "Check if Two Numbers are Equal",
            code: `a, b = map(int, input("Enter two values: ").split())
if a == b:
    print("The entered numbers are equal.")
else:
    print("The entered numbers are not equal.")`
        },
        {
            id: 2,
            title: "Power Table",
            code: `print("X \t Y \t X**Y")
for y in range(2, 6):
    print(f"10 \t {y} \t {10**y}")`
        },
        {
            id: 3,
            title: "Divisibility Test",
            code: `num = int(input("Enter a number: "))
if num % 5 == 0 and num % 10 == 0:
    print(num, "is divisible by both 5 and 10")
elif num % 5 == 0 or num % 10 == 0:
    print(num, "is divisible either by 5 or 10")
else:
    print(num, "is not divisible by both 5 and 10")`
        },
        {
            id: 4,
            title: "Calculate Total and Percentage of Marks",
            code: `subjects = ["Data-Structure", "Python", "Java", "C Programming", "HTML"]
total = 0
for subject in subjects:
    marks = float(input(f"Enter the Marks of {subject}: "))
    total += marks

percentage = total / len(subjects)
print(f"Total marks obtained: {total} out of {len(subjects) * 100}")
print(f"Percentage: {percentage}%")

if percentage >= 90:
    print("Distinction")
elif percentage >= 80:
    print("First Class")
elif percentage >= 70:
    print("Second Class")
elif percentage >= 60:
    print("Pass")
else:
    print("Fail")`
        },
        {
            id: 5,
            title: "Basic Arithmetic Operations",
            code: `num1 = float(input("Enter the first number: "))
num2 = float(input("Enter the second number: "))
print("1) Addition")
print("2) Subtraction")
print("3) Multiplication")
print("4) Division")
choice = int(input("Please Enter the Choice: "))
if choice == 1:
    print("Addition:", num1 + num2)
elif choice == 2:
    print("Subtraction:", num1 - num2)
elif choice == 3:
    print("Multiplication:", num1 * num2)
elif choice == 4:
    print("Division:", num1 / num2)
else:
    print("Sorry!!! Invalid Choice")`
        },
        {
            id: 6,
            title: "Sum of First 10 Numbers Using a While Loop",
            code: `sum = 0
i = 1
while i <= 10:
    sum += i
    i += 1
print("Sum of first 10 numbers:", sum)`
        },
        {
            id: 7,
            title: "Print Sum of Digits of an Entered Number",
            code: `num = int(input("Enter a number: "))
sum_of_digits = 0
while num > 0:
    digit = num % 10
    sum_of_digits += digit
    num //= 10
print("Sum of digits:", sum_of_digits)`
        },
        {
            id: 8,
            title: "Print Even Numbers from 0 to 10 and their Sum",
            code: `sum_even = 0
print("Even numbers from 0 to 10:")
for i in range(0, 11, 2):
    print(i, end=" ")
    sum_even += i
print("\nSum of even numbers:", sum_even)`
        },
        {
            id: 9,
            title: "Check if a Number is Prime",
            code: `def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True

num = int(input("Enter a number: "))
if is_prime(num):
    print(num, "is a prime number")
else:
    print(num, "is not a prime number")`
        },
        {
            id: 10,
            title: "Print Fibonacci Series Up to N Terms",
            code: `def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        print(a, end=" ")
        a, b = b, a + b

n = int(input("Enter the number of terms: "))
print("Fibonacci series:")
fibonacci(n)`
        },
        {
            id: 11,
            title: "Welcome Message Function",
            code: `def welcome_message(name):
    return f"Welcome, {name}!"

user_name = input("Enter your name: ")
print(welcome_message(user_name))`
        },
        {
            id: 12,
            title: "Matrix Multiplication Table",
            code: `def print_multiplication_table(n):
    for i in range(1, n+1):
        for j in range(1, n+1):
            print(f"{i*j:4}", end="")
        print()

n = int(input("Enter the size of the multiplication table: "))
print_multiplication_table(n)`
        },
        {
            id: 13,
            title: "Print Star Pattern",
            code: `def print_star_pattern(n):
    for i in range(1, n+1):
        print("*" * i)

n = int(input("Enter the number of rows: "))
print_star_pattern(n)`
        },
        {
            id: 14,
            title: "Armstrong Number Check",
            code: `def is_armstrong(num):
    order = len(str(num))
    sum = 0
    temp = num
    while temp > 0:
        digit = temp % 10
        sum += digit ** order
        temp //= 10
    return num == sum

num = int(input("Enter a number: "))
if is_armstrong(num):
    print(num, "is an Armstrong number")
else:
    print(num, "is not an Armstrong number")`
        },
        {
            id: 15,
            title: "Display Alphabet Letters A to Z",
            code: `import string

print("Alphabet letters from A to Z:")
for letter in string.ascii_uppercase:
    print(letter, end=" ")
print()`
        },
        {
            id: 16,
            title: "Reverse Order Numbers from 1 to 10",
            code: `print("Numbers from 10 to 1 in reverse order:")
for i in range(10, 0, -1):
    print(i, end=" ")
print()`
        },
        {
            id: 17,
            title: "Sum of Numbers from 1 to 20 Divisible by 5",
            code: `sum_divisible_by_5 = sum(i for i in range(1, 21) if i % 5 == 0)
print("Sum of numbers from 1 to 20 divisible by 5:", sum_divisible_by_5)`
        },
        {
            id: 18,
            title: "Print Squares of First Five Numbers",
            code: `print("Squares of first five numbers:")
for i in range(1, 6):
    print(f"{i}^2 = {i**2}")`
        },
        {
            id: 19,
            title: "Greatest Number Among Four Numbers",
            code: `def find_greatest(a, b, c, d):
    return max(a, b, c, d)

num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))
num3 = float(input("Enter third number: "))
num4 = float(input("Enter fourth number: "))

greatest = find_greatest(num1, num2, num3, num4)
print("The greatest number is:", greatest)`
        },
        {
            id: 20,
            title: "Print Fibonacci Series Up to 8",
            code: `def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        print(a, end=" ")
        a, b = b, a + b

print("Fibonacci series up to 8 terms:")
fibonacci(8)`
        },
        {
            id: 21,
            title: "Nested For Loop Demonstration",
            code: `for i in range(1, 4):
    for j in range(1, 4):
        print(f"i={i}, j={j}")`
        },
        {
            id: 22,
            title: "Display Multiplication Tables from 1 to 5",
            code: `for i in range(1, 6):
    print(f"Multiplication table for {i}:")
    for j in range(1, 11):
        print(f"{i} x {j} = {i*j}")
    print()`
        },
        {
            id: 23,
            title: "Pattern of Stars",
            code: `def print_star_pattern(n):
    for i in range(n):
        for j in range(i+1):
            print("*", end="")
        print()

n = int(input("Enter the number of rows: "))
print_star_pattern(n)`
        },
        {
            id: 24,
            title: "Check if a Number is Prime",
            code: `def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True

num = int(input("Enter a number: "))
if is_prime(num):
    print(num, "is a prime number")
else:
    print(num, "is not a prime number")`
        },
        {
            id: 25,
            title: "Welcome Message Function",
            code: `def welcome_message(name):
    return f"Welcome, {name}!"

user_name = input("Enter your name: ")
print(welcome_message(user_name))`
        },
        {
            id: 26,
            title: "Count B in a Word",
            code: `word = input("Enter a word: ")
count = word.lower().count('b')
print(f"The letter 'B' appears {count} time(s) in the word.")`
        },
        {
            id: 27,
            title: "Count Specific Letter in a Word",
            code: `word = input("Enter a word: ")
letter = input("Enter the letter to count: ")
count = word.lower().count(letter.lower())
print(f"The letter '{letter}' appears {count} time(s) in the word.")`
        },
        {
            id: 28,
            title: "List Comprehension for Even Elements",
            code: `numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
even_numbers = [x for x in numbers if x % 2 == 0]
print("Even numbers:", even_numbers)`
        },
        {
            id: 29,
            title: "Check Days in a Year",
            code: `def is_leap_year(year):
    return year % 4 == 0 and (year % 100 != 0 or year % 400 == 0)

year = int(input("Enter a year: "))
if is_leap_year(year):
    print(f"{year} is a leap year with 366 days.")
else:
    print(f"{year} is not a leap year and has 365 days.")`
        },
        {
            id: 30,
            title: "Bubble Sort",
            code: `def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr

numbers = [64, 34, 25, 12, 22, 11, 90]
sorted_numbers = bubble_sort(numbers)
print("Sorted array:", sorted_numbers)`
        },
        {
            id: 31,
            title: "Least Common Multiple (LCM)",
            code: `def gcd(a, b):
    while b:
        a, b = b, a % b
    return a

def lcm(a, b):
    return (a * b) // gcd(a, b)

num1 = int(input("Enter first number: "))
num2 = int(input("Enter second number: "))
result = lcm(num1, num2)
print(f"The LCM of {num1} and {num2} is {result}")`
        },
        {
            id: 32,
            title: "Dictionary Operations",
            code: `# Create a dictionary
my_dict = {'apple': 1, 'banana': 2, 'orange': 3}

# Add a new key-value pair
my_dict['grape'] = 4

# Update an existing value
my_dict['banana'] = 5

# Remove a key-value pair
del my_dict['orange']

# Print the dictionary
print("Updated dictionary:", my_dict)

# Check if a key exists
key = 'apple'
if key in my_dict:
    print(f"The value of {key} is {my_dict[key]}")
else:
    print(f"{key} is not in the dictionary")`
        },
        {
            id: 33,
            title: "Find Max and Min in a Tuple",
            code: `my_tuple = (3, 7, 1, 9, 4, 6, 8, 2)
print("Tuple:", my_tuple)
print("Maximum value:", max(my_tuple))
print("Minimum value:", min(my_tuple))`
        },
        {
            id: 34,
            title: "Text Wrapping",
            code: `import textwrap

text = "This is a long string of text that needs to be wrapped to fit within a certain width."
wrapped_text = textwrap.wrap(text, width=30)

print("Wrapped text:")
for line in wrapped_text:
    print(line)`
        },
        {
            id: 35,
            title: "Password Generator",
            code: `import random
import string

def generate_password(length=12):
    characters = string.ascii_letters + string.digits + string.punctuation
    password = ''.join(random.choice(characters) for _ in range(length))
    return password

password = generate_password()
print("Generated password:", password)`
        },
        {
            id: 36,
            title: "Validate Password",
            code: `import re

def validate_password(password):
    if len(password) < 8:
        return False
    if not re.search(r"[a-z]", password):
        return False
    if not re.search(r"[A-Z]", password):
        return False
    if not re.search(r"\d", password):
        return False
    if not re.search(r"[!@#$%^&*(),.?\":{}|<>]", password):
        return False
    return True

password = input("Enter a password: ")
if validate_password(password):
    print("Password is valid")
else:
    print("Password is invalid")`
        },
        {
            id: 37,
            title: "Reverse a String",
            code: `def reverse_string(s):
    return s[::-1]

text = input("Enter a string: ")
reversed_text = reverse_string(text)
print("Reversed string:", reversed_text)`
        },
        {
            id: 38,
            title: "Fibonacci Series Up to N Terms",
            code: `def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        print(a, end=" ")
        a, b = b, a + b

n = int(input("Enter the number of terms: "))
print("Fibonacci series:")
fibonacci(n)`
        },
        {
            id: 39,
            title: "Sum of First 10 Numbers Using a While Loop",
            code: `sum = 0
i = 1
while i <= 10:
    sum += i
    i += 1
print("Sum of first 10 numbers:", sum)`
        },
        {
            id: 40,
            title: "Print Even Numbers from 0 to 10 and their Sum",
            code: `sum_even = 0
print("Even numbers from 0 to 10:")
for i in range(0, 11, 2):
    print(i, end=" ")
    sum_even += i
print("\nSum of even numbers:", sum_even)`
        }
    ];

    const examplesContainer = document.getElementById('examplesContainer');
    const modal = document.getElementById('exampleModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalCode = document.getElementById('modalCode');
    const closeBtn = document.getElementsByClassName('close')[0];
    const copyButton = document.getElementById('copyButton');

    function createExampleCard(example) {
        const card = document.createElement('div');
        card.className = 'example-card';
        card.innerHTML = `<h3>${example.title}</h3>`;
        card.addEventListener('click', () => openModal(example));
        return card;
    }

    function openModal(example) {
        modalTitle.textContent = example.title;
        modalCode.textContent = example.code;
        Prism.highlightElement(modalCode);
        modal.style.display = 'block';
    }

    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    copyButton.onclick = function() {
        navigator.clipboard.writeText(modalCode.textContent).then(() => {
            alert('Code copied to clipboard!');
        });
    }

    codeExamples.forEach(example => {
        examplesContainer.appendChild(createExampleCard(example));
    });

    // Gradient animation
    const gradientBg = document.querySelector('.gradient-bg');
    let angle = 0;

    function animateGradient() {
        angle = (angle + 1) % 360;
        gradientBg.style.background = `
            linear-gradient(
                ${angle}deg,
                var(--gradient-1),
                var(--gradient-2),
                var(--gradient-3)
            )
        `;
        requestAnimationFrame(animateGradient);
    }

    animateGradient();

    // Add parallax effect to code preview
    const codePreview = document.querySelector('.code-preview');
    
    document.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        
        const xAxis = (clientX / innerWidth - 0.5) * 20;
        const yAxis = (clientY / innerHeight - 0.5) * 20;
        
        codePreview.style.transform = `
            perspective(1000px)
            rotateY(${xAxis}deg)
            rotateX(${-yAxis}deg)
        `;
    });
});
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.hash === "#examples") {
        history.replaceState(null, null, " "); // Clear the hash in the URL
    }
});

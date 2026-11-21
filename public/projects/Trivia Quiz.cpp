#include <iostream>
#include <string>
#include <vector>
using namespace std;

struct Question {
    string question;
    string answer;
};

int main() {
    vector<Question> quiz = {
        {"What do you call the special function in C++ where program execution begins?", "Main Function"},
        {"What is the keyword to create an integer variable?", "int"},
        {"What command prints text to the screen in C++?", "cout"},
        {"What is used to take input from the user in C++?", "cin"},
        {"What is used to repeat a block of code of a specific number of times?", "for loop"},
        {"It is a loop inside another loop, useful for grid, tables, or multi-level logic", "nested loop"},
        {"It repeats as long as a condition remains true", "while loop"},
        {"It is similar to \'while\', but guarantees the loop runs at least once", "do-while loop"},
        {"It is a structure that provides alternatives to sequential program execution", "Control Structure"},
        {"A __ can process a program in one of the following ways", "computer"},
        {"It is a program that executes statements depending on a condition", "selection"},
        {"It is a program that repeats statements a certain number of times", "repetition"},
        {"It is an operator that can be used with int, double, char", "Relational Operator"},
        {"What's a statement that lets your program make decisions?", "if-else"},
        {"Statement used to run code only when a condition is true", "if"},
        {"What is a statement to check multiple conditions", "if-else-if"},
    };

    int score = 0;
    int totalQuestions = quiz.size();
    string userAnswer;

    cout << "C++ Trivia Quiz!\n";
    cout << "Do you know everything?\n\n";

    for(int i = 0; i < quiz.size(); i++) {
        cout << "Question " << (i + 1) << "/16: " << quiz[i].question << endl;
        cout << "Answer: ";
        getline(cin, userAnswer);

        string correctAnswerLower = quiz[i].answer;
        string userAnswerLower = userAnswer;

        for (char & c : correctAnswerLower) c = tolower(c);
        for (char & c : userAnswerLower) c = tolower(c);

        if (userAnswerLower == correctAnswerLower) {
            cout << "Your answer is correct!\n\n";
            score++;
        } else {
            cout << "Incorrect! The right answer is: " << quiz[i].answer << "\n\n";
        }
    }

    cout << "Quiz Over!\n";
    cout << "Score: " << score << " out of " << totalQuestions << "." << endl;

    double percentage = (score * 100.0) / totalQuestions;
    cout << "Percentage: " << percentage << "%\n";

    if(percentage == 100) {
        cout << "Rank: SS\nYou actually know everything!\n\n";
    } else if(percentage >= 95) {
        cout << "Rank: S\nAmazing!\n\n";
    } else if(percentage >= 85) {
        cout << "Rank: A\nNice Try!\n\n";
    } else if(percentage >= 80) {
        cout << "Rank: B\nNot Bad.\n\n";
    } else if(percentage >= 75) {
        cout << "Rank: C\nYou can do better.\n\n";
    } else if(percentage >= 70) {
        cout << "Rank: D\nNever back down, never give up.\n\n";
    } else {
        cout << "Rank: F\nTry and try again.\n\n";
    }
        
        cout << "== Members ==" << endl;
        cout << "• Zendrei Martin Jac A. Perales" << endl;
        cout << "• Eduardo Niño V. Casimero" << endl;
        cout << "• Kryz Jullian G. Yap" << endl;
        cout << "• Reyvic Miguel J. Borcegue" << endl;
        cout << "• Heroyuki B. Ballos" << endl << endl;
        cout << "== Submitted to ==" << endl;
        cout << "Ms. Alyssa Mae L. Cruzada" << endl;
        
    return 0;
}
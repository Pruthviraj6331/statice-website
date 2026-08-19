pipeline {
    agent any

    triggers {
        githubPush()
    }

    stages {

        stage('Checkout') {
            steps {
                echo 'Checking out source code...'
                checkout scm
            }
        }

        stage('Build') {
            steps {
                echo 'Building Static Website...'
                bat 'dir'
            }
        }

        stage('Test') {
            steps {
                echo 'Testing Static Website...'
                bat 'if exist index.html (echo index.html found) else (exit /b 1)'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying Static Website...'
            }
        }
    }

    post {
        success {
            echo ' Pipeline completed successfully!'
        }

        failure {
            echo ' Pipeline failed!'
        }
    }
}

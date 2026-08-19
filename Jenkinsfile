pipeline {
    agent any

    triggers {
        githubPush()
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                echo 'Building Static Website...'
            }
        }

        stage('Test') {
            steps {
                echo 'Testing Static Website...'
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
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}

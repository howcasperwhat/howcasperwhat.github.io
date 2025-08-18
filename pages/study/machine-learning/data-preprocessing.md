---
next: simple-linear-regression
---
# Data Preprocessing
::: tabbar
@ data
``` csv
Country,Age,Salary,Purchased
France,44,72000,No
Spain,27,48000,Yes
Germany,30,54000,No
Spain,38,61000,No
Germany,40,,Yes
France,35,58000,Yes
Spain,,52000,No
France,48,79000,Yes
Germany,50,83000,No
France,37,67000,Yes
```
@ code
``` python
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder, OneHotEncoder
from sklearn.impute import SimpleImputer
import numpy as np
import pandas as pd
import os

current_dir = os.path.dirname(os.path.abspath(__file__))

dataset = pd.read_csv(current_dir + '/../datasets/Data.csv')
X = dataset.iloc[:, :-1].values
Y = dataset.iloc[:, 3].values

# Replace missing data with mean of column
imputer = SimpleImputer(strategy='mean')
imputer.fit(X[:, 1:3])
X[:, 1:3] = imputer.transform(X[:, 1:3])

# Encode target label(e.g. string) with value between 0 and n_classes-1
label_encoder_X = LabelEncoder()
X[:, 0] = label_encoder_X.fit_transform(X[:, 0])

# Encode categorical integer features as a one-hot numeric array(e.g. 0,1,2 -> 1,0,0; 0,0,1; 0,1,0)
one_hot_encoder = OneHotEncoder()
X = one_hot_encoder.fit_transform(X).toarray()

label_encoder_Y = LabelEncoder()
Y = label_encoder_Y.fit_transform(Y)

# Split dataset into training and test sets
X_train, X_test, Y_train, Y_test = train_test_split(
    X, Y, test_size=0.2, random_state=0)

# Scaling data to normal distribution
sc_X = StandardScaler()
X_train = sc_X.fit_transform(X_train)
X_test = sc_X.transform(X_test)
```
:::

# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: HIV_Modelling_CaseBasedFile_HappyFlow_POC.spec.ts >> HIV modelling - Happy flow
- Location: tests\HIV_Modelling_CaseBasedFile_HappyFlow_POC.spec.ts:5:5

# Error details

```
Test timeout of 220000ms exceeded.
```

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('#run-log-content')
- Expected substring  -  1
+ Received string     + 57

- Adjustments completed successfully!
+ [17:51:04] Starting adjustments...
+ Loaded data: 11575 rows, 27 columns
+ Initializing Python environment...
+ Python environment initialized successfully
+ Preprocessing data (computing derived columns)...
+
+ Running JOMO imputation (nimp=5, nburn=1000, nbetween=500, nsdf=4, imputeRD=False)...
+
+ Processing gender: M
+ Running MCMC sampler.
+ No clustering, using functions for single level imputation.
+ Found  2 continuous outcomes and  1 categorical. Using function jomo1mix. 
+ Performing imputation.
+ Number of burn-in iterations set to 10 for the actual imputation.
+ No clustering, using functions for single level imputation.
+ Found  2 continuous outcomes and  1 categorical. Using function jomo1mix. 
+ First imputation registered. 
+ .....Imputation number  2 registered 
+ .....Imputation number  3 registered 
+ .....Imputation number  4 registered 
+ .....Imputation number  5 registered 
+ The posterior mean of the fixed effects estimates is:
+                      AIDS  Intercept SplineKnot.1 SplineKnot.2 SplineKnot.3
+ Age             4.1221020 28.0657283    6.2644486    5.8107389    6.2378169
+ SqCD4          -9.0729293 24.2829657    2.1871468    1.9321242    7.1942779
+ Transmission.1  0.7011802 -1.8379604    1.3231842    0.7862333    2.9926422
+ Transmission.2  0.5685153 -1.5326488    0.3621680    0.2343638    2.3322868
+ Transmission.3  0.2826234  0.7390355   -0.5890692   -0.3804071   -0.5247892
+                SplineKnot.4
+ Age              5.34609895
+ SqCD4            1.63301272
+ Transmission.1  -0.06479251
+ Transmission.2  -0.88448791
+ Transmission.3  -0.36888926
+ The posterior covariance matrix is:
+                        Age       SqCD4 Transmission.1 Transmission.2
+ Age            126.3735894 -16.1261313      0.9977134      -3.422230
+ SqCD4          -16.1261313  59.0750639      0.1820613       1.457508
+ Transmission.1   0.9977134   0.1820613      1.0000000       0.500000
+ Transmission.2  -3.4222295   1.4575084      0.5000000       1.000000
+ Transmission.3  -1.5187223   2.1538121      0.5000000       0.500000
+                Transmission.3
+ Age                 -1.518722
+ SqCD4                2.153812
+ Transmission.1       0.500000
+ Transmission.2       0.500000
+ Transmission.3       1.000000
+ Processing gender: F
+ Running MCMC sampler.
+ No clustering, using functions for single level imputation.
+ Found  2 continuous outcomes and  1 categorical. Using function jomo1mix. 
+ Performing imputation.
+ Number of burn-in iterations set to 10 for the actual imputation.
+ No clustering, using functions for single level imputation.
+ Found  2 continuous outcomes and  1 categorical. Using function jomo1mix. 
+ First imputation registered. 
+

Call log:
  - Expect "toContainText" with timeout 220000ms
  - waiting for locator('#run-log-content')
    - locator resolved to <div id="run-log-content"></div>
    3 × unexpected value ""
      - locator resolved to <div id="run-log-content" data-dash-is-loading="true"></div>
    - unexpected value ""
    - locator resolved to <div id="run-log-content">[17:51:04] Starting adjustments...↵Loaded data: 1…</div>
    - unexpected value "[17:51:04] Starting adjustments...
Loaded data: 11575 rows, 27 columns
"
    - locator resolved to <div id="run-log-content">[17:51:04] Starting adjustments...↵Loaded data: 1…</div>
    - unexpected value "[17:51:04] Starting adjustments...
Loaded data: 11575 rows, 27 columns
Initializing Python environment...
"
    3 × locator resolved to <div id="run-log-content">[17:51:04] Starting adjustments...↵Loaded data: 1…</div>
      - unexpected value "[17:51:04] Starting adjustments...
Loaded data: 11575 rows, 27 columns
Initializing Python environment...
Python environment initialized successfully
Preprocessing data (computing derived columns)...

Running JOMO imputation (nimp=5, nburn=1000, nbetween=500, nsdf=4, imputeRD=False)...

"
    31 × locator resolved to <div id="run-log-content">[17:51:04] Starting adjustments...↵Loaded data: 1…</div>
       - unexpected value "[17:51:04] Starting adjustments...
Loaded data: 11575 rows, 27 columns
Initializing Python environment...
Python environment initialized successfully
Preprocessing data (computing derived columns)...

Running JOMO imputation (nimp=5, nburn=1000, nbetween=500, nsdf=4, imputeRD=False)...

Processing gender: M
Running MCMC sampler.
No clustering, using functions for single level imputation.
Found  2 continuous outcomes and  1 categorical. Using function jomo1mix. 
"
    7 × locator resolved to <div id="run-log-content" data-dash-is-loading="true">[17:51:04] Starting adjustments...↵Loaded data: 1…</div>
      - unexpected value "[17:51:04] Starting adjustments...
Loaded data: 11575 rows, 27 columns
Initializing Python environment...
Python environment initialized successfully
Preprocessing data (computing derived columns)...

Running JOMO imputation (nimp=5, nburn=1000, nbetween=500, nsdf=4, imputeRD=False)...

Processing gender: M
Running MCMC sampler.
No clustering, using functions for single level imputation.
Found  2 continuous outcomes and  1 categorical. Using function jomo1mix. 
"
    37 × locator resolved to <div id="run-log-content">[17:51:04] Starting adjustments...↵Loaded data: 1…</div>
       - unexpected value "[17:51:04] Starting adjustments...
Loaded data: 11575 rows, 27 columns
Initializing Python environment...
Python environment initialized successfully
Preprocessing data (computing derived columns)...

Running JOMO imputation (nimp=5, nburn=1000, nbetween=500, nsdf=4, imputeRD=False)...

Processing gender: M
Running MCMC sampler.
No clustering, using functions for single level imputation.
Found  2 continuous outcomes and  1 categorical. Using function jomo1mix. 
"
    5 × locator resolved to <div id="run-log-content" data-dash-is-loading="true">[17:51:04] Starting adjustments...↵Loaded data: 1…</div>
      - unexpected value "[17:51:04] Starting adjustments...
Loaded data: 11575 rows, 27 columns
Initializing Python environment...
Python environment initialized successfully
Preprocessing data (computing derived columns)...

Running JOMO imputation (nimp=5, nburn=1000, nbetween=500, nsdf=4, imputeRD=False)...

Processing gender: M
Running MCMC sampler.
No clustering, using functions for single level imputation.
Found  2 continuous outcomes and  1 categorical. Using function jomo1mix. 
"
    - locator resolved to <div id="run-log-content">[17:51:04] Starting adjustments...↵Loaded data: 1…</div>
    - unexpected value "[17:51:04] Starting adjustments...
Loaded data: 11575 rows, 27 columns
Initializing Python environment...
Python environment initialized successfully
Preprocessing data (computing derived columns)...

Running JOMO imputation (nimp=5, nburn=1000, nbetween=500, nsdf=4, imputeRD=False)...

Processing gender: M
Running MCMC sampler.
No clustering, using functions for single level imputation.
Found  2 continuous outcomes and  1 categorical. Using function jomo1mix. 
"
    - locator resolved to <div id="run-log-content" data-dash-is-loading="true">[17:51:04] Starting adjustments...↵Loaded data: 1…</div>
    36 × unexpected value "[17:51:04] Starting adjustments...
Loaded data: 11575 rows, 27 columns
Initializing Python environment...
Python environment initialized successfully
Preprocessing data (computing derived columns)...

Running JOMO imputation (nimp=5, nburn=1000, nbetween=500, nsdf=4, imputeRD=False)...

Processing gender: M
Running MCMC sampler.
No clustering, using functions for single level imputation.
Found  2 continuous outcomes and  1 categorical. Using function jomo1mix. 
"
       - locator resolved to <div id="run-log-content">[17:51:04] Starting adjustments...↵Loaded data: 1…</div>
    2 × unexpected value "[17:51:04] Starting adjustments...
Loaded data: 11575 rows, 27 columns
Initializing Python environment...
Python environment initialized successfully
Preprocessing data (computing derived columns)...

Running JOMO imputation (nimp=5, nburn=1000, nbetween=500, nsdf=4, imputeRD=False)...

Processing gender: M
Running MCMC sampler.
No clustering, using functions for single level imputation.
Found  2 continuous outcomes and  1 categorical. Using function jomo1mix. 
Performing imputation.
Number of burn-in iterations set to 10 for the actual imputation.
No clustering, using functions for single level imputation.
Found  2 continuous outcomes and  1 categorical. Using function jomo1mix. 
"
      - locator resolved to <div id="run-log-content">[17:51:04] Starting adjustments...↵Loaded data: 1…</div>
    2 × unexpected value "[17:51:04] Starting adjustments...
Loaded data: 11575 rows, 27 columns
Initializing Python environment...
Python environment initialized successfully
Preprocessing data (computing derived columns)...

Running JOMO imputation (nimp=5, nburn=1000, nbetween=500, nsdf=4, imputeRD=False)...

Processing gender: M
Running MCMC sampler.
No clustering, using functions for single level imputation.
Found  2 continuous outcomes and  1 categorical. Using function jomo1mix. 
Performing imputation.
Number of burn-in iterations set to 10 for the actual imputation.
No clustering, using functions for single level imputation.
Found  2 continuous outcomes and  1 categorical. Using function jomo1mix. 
First imputation registered. 
"
      - locator resolved to <div id="run-log-content">[17:51:04] Starting adjustments...↵Loaded data: 1…</div>
    8 × unexpected value "[17:51:04] Starting adjustments...
Loaded data: 11575 rows, 27 columns
Initializing Python environment...
Python environment initialized successfully
Preprocessing data (computing derived columns)...

Running JOMO imputation (nimp=5, nburn=1000, nbetween=500, nsdf=4, imputeRD=False)...

Processing gender: M
Running MCMC sampler.
No clustering, using functions for single level imputation.
Found  2 continuous outcomes and  1 categorical. Using function jomo1mix. 
Performing imputation.
Number of burn-in iterations set to 10 for the actual imputation.
No clustering, using functions for single level imputation.
Found  2 continuous outcomes and  1 categorical. Using function jomo1mix. 
First imputation registered. 
"
      - locator resolved to <div id="run-log-content" data-dash-is-loading="true">[17:51:04] Starting adjustments...↵Loaded data: 1…</div>
    - unexpected value "[17:51:04] Starting adjustments...
Loaded data: 11575 rows, 27 columns
Initializing Python environment...
Python environment initialized successfully
Preprocessing data (computing derived columns)...

Running JOMO imputation (nimp=5, nburn=1000, nbetween=500, nsdf=4, imputeRD=False)...

Processing gender: M
Running MCMC sampler.
No clustering, using functions for single level imputation.
Found  2 continuous outcomes and  1 categorical. Using function jomo1mix. 
Performing imputation.
Number of burn-in iterations set to 10 for the actual imputation.
No clustering, using functions for single level imputation.
Found  2 continuous outcomes and  1 categorical. Using function jomo1mix. 
First imputation registered. 
"
    - locator resolved to <div id="run-log-content">[17:51:04] Starting adjustments...↵Loaded data: 1…</div>
    - unexpected value "[17:51:04] Starting adjustments...
Loaded data: 11575 rows, 27 columns
Initializing Python environment...
Python environment initialized successfully
Preprocessing data (computing derived columns)...

Running JOMO imputation (nimp=5, nburn=1000, nbetween=500, nsdf=4, imputeRD=False)...

Processing gender: M
Running MCMC sampler.
No clustering, using functions for single level imputation.
Found  2 continuous outcomes and  1 categorical. Using function jomo1mix. 
Performing imputation.
Number of burn-in iterations set to 10 for the actual imputation.
No clustering, using functions for single level imputation.
Found  2 continuous outcomes and  1 categorical. Using function jomo1mix. 
First imputation registered. 
"
    - locator resolved to <div id="run-log-content" data-dash-is-loading="true">[17:51:04] Starting adjustments...↵Loaded data: 1…</div>
    41 × unexpected value "[17:51:04] Starting adjustments...
Loaded data: 11575 rows, 27 columns
Initializing Python environment...
Python environment initialized successfully
Preprocessing data (computing derived columns)...

Running JOMO imputation (nimp=5, nburn=1000, nbetween=500, nsdf=4, imputeRD=False)...

Processing gender: M
Running MCMC sampler.
No clustering, using functions for single level imputation.
Found  2 continuous outcomes and  1 categorical. Using function jomo1mix. 
Performing imputation.
Number of burn-in iterations set to 10 for the actual imputation.
No clustering, using functions for single level imputation.
Found  2 continuous outcomes and  1 categorical. Using function jomo1mix. 
First imputation registered. 
"
       - locator resolved to <div id="run-log-content">[17:51:04] Starting adjustments...↵Loaded data: 1…</div>
    5 × unexpected value "[17:51:04] Starting adjustments...
Loaded data: 11575 rows, 27 columns
Initializing Python environment...
Python environment initialized successfully
Preprocessing data (computing derived columns)...

Running JOMO imputation (nimp=5, nburn=1000, nbetween=500, nsdf=4, imputeRD=False)...

Processing gender: M
Running MCMC sampler.
No clustering, using functions for single level imputation.
Found  2 continuous outcomes and  1 categorical. Using function jomo1mix. 
Performing imputation.
Number of burn-in iterations set to 10 for the actual imputation.
No clustering, using functions for single level imputation.
Found  2 continuous outcomes and  1 categorical. Using function jomo1mix. 
First imputation registered. 
"
      - locator resolved to <div id="run-log-content" data-dash-is-loading="true">[17:51:04] Starting adjustments...↵Loaded data: 1…</div>
    - unexpected value "[17:51:04] Starting adjustments...
Loaded data: 11575 rows, 27 columns
Initializing Python environment...
Python environment initialized successfully
Preprocessing data (computing derived columns)...

Running JOMO imputation (nimp=5, nburn=1000, nbetween=500, nsdf=4, imputeRD=False)...

Processing gender: M
Running MCMC sampler.
No clustering, using functions for single level imputation.
Found  2 continuous outcomes and  1 categorical. Using function jomo1mix. 
Performing imputation.
Number of burn-in iterations set to 10 for the actual imputation.
No clustering, using functions for single level imputation.
Found  2 continuous outcomes and  1 categorical. Using function jomo1mix. 
First imputation registered. 
.....Imputation number  2 registered 
"
    - locator resolved to <div id="run-log-content" data-dash-is-loading="true">[17:51:04] Starting adjustments...↵Loaded data: 1…</div>
    43 × unexpected value "[17:51:04] Starting adjustments...
Loaded data: 11575 rows, 27 columns
Initializing Python environment...
Python environment initialized successfully
Preprocessing data (computing derived columns)...

Running JOMO imputation (nimp=5, nburn=1000, nbetween=500, nsdf=4, imputeRD=False)...

Processing gender: M
Running MCMC sampler.
No clustering, using functions for single level imputation.
Found  2 continuous outcomes and  1 categorical. Using function jomo1mix. 
Performing imputation.
Number of burn-in iterations set to 10 for the actual imputation.
No clustering, using functions for single level imputation.
Found  2 continuous outcomes and  1 categorical. Using function jomo1mix. 
First imputation registered. 
.....Imputation number  2 registered 
"
       - locator resolved to <div id="run-log-content">[17:51:04] Starting adjustments...↵Loaded data: 1…</div>
    7 × unexpected value "[17:51:04] Starting adjustments...
Loaded data: 11575 rows, 27 columns
Initializing Python environment...
Python environment initialized successfully
Preprocessing data (computing derived columns)...

Running JOMO imputation (nimp=5, nburn=1000, nbetween=500, nsdf=4, imputeRD=False)...

Processing gender: M
Running MCMC sampler.
No clustering, using functions for single level imputation.
Found  2 continuous outcomes and  1 categorical. Using function jomo1mix. 
Performing imputation.
Number of burn-in iterations set to 10 for the actual imputation.
No clustering, using functions for single level imputation.
Found  2 continuous outcomes and  1 categorical. Using function jomo1mix. 
First imputation registered. 
.....Imputation number  2 registered 
"
      - locator resolved to <div id="run-log-content" data-dash-is-loading="true">[17:51:04] Starting adjustments...↵Loaded data: 1…</div>
    6 × unexpected value "[17:51:04] Starting adjustments...
Loaded data: 11575 rows, 27 columns
Initializing Python environment...
Python environment initialized successfully
Preprocessing data (computing derived columns)...

Running JOMO imputation (nimp=5, nburn=1000, nbetween=500, nsdf=4, imputeRD=False)...

Processing gender: M
Running MCMC sampler.
No clustering, using functions for single level imputation.
Found  2 continuous outcomes and  1 categorical. Using function jomo1mix. 
Performing imputation.
Number of burn-in iterations set to 10 for the actual imputation.
No clustering, using functions for single level imputation.
Found  2 continuous outcomes and  1 categorical. Using function jomo1mix. 
First imputation registered. 
.....Imputation number  2 registered 
"
      - locator resolved to <div id="run-log-content">[17:51:04] Starting adjustments...↵Loaded data: 1…</div>
    33 × unexpected value "[17:51:04] Starting adjustments...
Loaded data: 11575 rows, 27 columns
Initializing Python environment...
Python environment initialized successfully
Preprocessing data (computing derived columns)...

Running JOMO imputation (nimp=5, nburn=1000, nbetween=500, nsdf=4, imputeRD=False)...

Processing gender: M
Running MCMC sampler.
No clustering, using functions for single level imputation.
Found  2 continuous outcomes and  1 categorical. Using function jomo1mix. 
Performing imputation.
Number of burn-in iterations set to 10 for the actual imputation.
No clustering, using functions for single level imputation.
Found  2 continuous outcomes and  1 categorical. Using function jomo1mix. 
First imputation registered. 
.....Imputation number  2 registered 
.....Imputation number  3 registered 
"
       - locator resolved to <div id="run-log-content">[17:51:04] Starting adjustments...↵Loaded data: 1…</div>
    6 × unexpected value "[17:51:04] Starting adjustments...
Loaded data: 11575 rows, 27 columns
Initializing Python environment...
Python environment initialized successfully
Preprocessing data (computing derived columns)...

Running JOMO imputation (nimp=5, nburn=1000, nbetween=500, nsdf=4, imputeRD=False)...

Processing gender: M
Running MCMC sampler.
No clustering, using functions for single level imputation.
Found  2 continuous outcomes and  1 categorical. Using function jomo1mix. 
Performing imputation.
Number of burn-in iterations set to 10 for the actual imputation.
No clustering, using functions for single level imputation.
Found  2 continuous outcomes and  1 categorical. Using function jomo1mix. 
First imputation registered. 
.....Imputation number  2 registered 
.....Imputation number  3 registered 
"
      - locator resolved to <div id="run-log-content" data-dash-is-loading="true">[17:51:04] Starting adjustments...↵Loaded data: 1…</div>
    20 × unexpected value "[17:51:04] Starting adjustments...
Loaded data: 11575 rows, 27 columns
Initializing Python environment...
Python environment initialized successfully
Preprocessing data (computing derived columns)...

Running JOMO imputation (nimp=5, nburn=1000, nbetween=500, nsdf=4, imputeRD=False)...

Processing gender: M
Running MCMC sampler.
No clustering, using functions for single level imputation.
Found  2 continuous outcomes and  1 categorical. Using function jomo1mix. 
Performing imputation.
Number of burn-in iterations set to 10 for the actual imputation.
No clustering, using functions for single level imputation.
Found  2 continuous outcomes and  1 categorical. Using function jomo1mix. 
First imputation registered. 
.....Imputation number  2 registered 
.....Imputation number  3 registered 
"
       - locator resolved to <div id="run-log-content">[17:51:04] Starting adjustments...↵Loaded data: 1…</div>
    19 × unexpected value "[17:51:04] Starting adjustments...
Loaded data: 11575 rows, 27 columns
Initializing Python environment...
Python environment initialized successfully
Preprocessing data (computing derived columns)...

Running JOMO imputation (nimp=5, nburn=1000, nbetween=500, nsdf=4, imputeRD=False)...

Processing gender: M
Running MCMC sampler.
No clustering, using functions for single level imputation.
Found  2 continuous outcomes and  1 categorical. Using function jomo1mix. 
Performing imputation.
Number of burn-in iterations set to 10 for the actual imputation.
No clustering, using functions for single level imputation.
Found  2 continuous outcomes and  1 categorical. Using function jomo1mix. 
First imputation registered. 
.....Imputation number  2 registered 
.....Imputation number  3 registered 
.....Imputation number  4 registered 
"
       - locator resolved to <div id="run-log-content">[17:51:04] Starting adjustments...↵Loaded data: 1…</div>
    9 × unexpected value "[17:51:04] Starting adjustments...
Loaded data: 11575 rows, 27 columns
Initializing Python environment...
Python environment initialized successfully
Preprocessing data (computing derived columns)...

Running JOMO imputation (nimp=5, nburn=1000, nbetween=500, nsdf=4, imputeRD=False)...

Processing gender: M
Running MCMC sampler.
No clustering, using functions for single level imputation.
Found  2 continuous outcomes and  1 categorical. Using function jomo1mix. 
Performing imputation.
Number of burn-in iterations set to 10 for the actual imputation.
No clustering, using functions for single level imputation.
Found  2 continuous outcomes and  1 categorical. Using function jomo1mix. 
First imputation registered. 
.....Imputation number  2 registered 
.....Imputation number  3 registered 
.....Imputation number  4 registered 
"
      - locator resolved to <div id="run-log-content" data-dash-is-loading="true">[17:51:04] Starting adjustments...↵Loaded data: 1…</div>
    30 × unexpected value "[17:51:04] Starting adjustments...
Loaded data: 11575 rows, 27 columns
Initializing Python environment...
Python environment initialized successfully
Preprocessing data (computing derived columns)...

Running JOMO imputation (nimp=5, nburn=1000, nbetween=500, nsdf=4, imputeRD=False)...

Processing gender: M
Running MCMC sampler.
No clustering, using functions for single level imputation.
Found  2 continuous outcomes and  1 categorical. Using function jomo1mix. 
Performing imputation.
Number of burn-in iterations set to 10 for the actual imputation.
No clustering, using functions for single level imputation.
Found  2 continuous outcomes and  1 categorical. Using function jomo1mix. 
First imputation registered. 
.....Imputation number  2 registered 
.....Imputation number  3 registered 
.....Imputation number  4 registered 
"
       - locator resolved to <div id="run-log-content">[17:51:04] Starting adjustments...↵Loaded data: 1…</div>
    - unexpected value "[17:51:04] Starting adjustments...
Loaded data: 11575 rows, 27 columns
Initializing Python environment...
Python environment initialized successfully
Preprocessing data (computing derived columns)...

Running JOMO imputation (nimp=5, nburn=1000, nbetween=500, nsdf=4, imputeRD=False)...

Processing gender: M
Running MCMC sampler.
No clustering, using functions for single level imputation.
Found  2 continuous outcomes and  1 categorical. Using function jomo1mix. 
Performing imputation.
Number of burn-in iterations set to 10 for the actual imputation.
No clustering, using functions for single level imputation.
Found  2 continuous outcomes and  1 categorical. Using function jomo1mix. 
First imputation registered. 
.....Imputation number  2 registered 
.....Imputation number  3 registered 
.....Imputation number  4 registered 
.....Imputation number  5 registered 
The posterior mean of the fixed effects estimates is:
                     AIDS  Intercept SplineKnot.1 SplineKnot.2 SplineKnot.3
Age             4.1221020 28.0657283    6.2644486    5.8107389    6.2378169
SqCD4          -9.0729293 24.2829657    2.1871468    1.9321242    7.1942779
Transmission.1  0.7011802 -1.8379604    1.3231842    0.7862333    2.9926422
Transmission.2  0.5685153 -1.5326488    0.3621680    0.2343638    2.3322868
Transmission.3  0.2826234  0.7390355   -0.5890692   -0.3804071   -0.5247892
               SplineKnot.4
Age              5.34609895
SqCD4            1.63301272
Transmission.1  -0.06479251
Transmission.2  -0.88448791
Transmission.3  -0.36888926
The posterior covariance matrix is:
                       Age       SqCD4 Transmission.1 Transmission.2
Age            126.3735894 -16.1261313      0.9977134      -3.422230
SqCD4          -16.1261313  59.0750639      0.1820613       1.457508
Transmission.1   0.9977134   0.1820613      1.0000000       0.500000
Transmission.2  -3.4222295   1.4575084      0.5000000       1.000000
Transmission.3  -1.5187223   2.1538121      0.5000000       0.500000
               Transmission.3
Age                 -1.518722
SqCD4                2.153812
Transmission.1       0.500000
Transmission.2       0.500000
Transmission.3       1.000000
"
    5 × locator resolved to <div id="run-log-content">[17:51:04] Starting adjustments...↵Loaded data: 1…</div>
      - unexpected value "[17:51:04] Starting adjustments...
Loaded data: 11575 rows, 27 columns
Initializing Python environment...
Python environment initialized successfully
Preprocessing data (computing derived columns)...

Running JOMO imputation (nimp=5, nburn=1000, nbetween=500, nsdf=4, imputeRD=False)...

Processing gender: M
Running MCMC sampler.
No clustering, using functions for single level imputation.
Found  2 continuous outcomes and  1 categorical. Using function jomo1mix. 
Performing imputation.
Number of burn-in iterations set to 10 for the actual imputation.
No clustering, using functions for single level imputation.
Found  2 continuous outcomes and  1 categorical. Using function jomo1mix. 
First imputation registered. 
.....Imputation number  2 registered 
.....Imputation number  3 registered 
.....Imputation number  4 registered 
.....Imputation number  5 registered 
The posterior mean of the fixed effects estimates is:
                     AIDS  Intercept SplineKnot.1 SplineKnot.2 SplineKnot.3
Age             4.1221020 28.0657283    6.2644486    5.8107389    6.2378169
SqCD4          -9.0729293 24.2829657    2.1871468    1.9321242    7.1942779
Transmission.1  0.7011802 -1.8379604    1.3231842    0.7862333    2.9926422
Transmission.2  0.5685153 -1.5326488    0.3621680    0.2343638    2.3322868
Transmission.3  0.2826234  0.7390355   -0.5890692   -0.3804071   -0.5247892
               SplineKnot.4
Age              5.34609895
SqCD4            1.63301272
Transmission.1  -0.06479251
Transmission.2  -0.88448791
Transmission.3  -0.36888926
The posterior covariance matrix is:
                       Age       SqCD4 Transmission.1 Transmission.2
Age            126.3735894 -16.1261313      0.9977134      -3.422230
SqCD4          -16.1261313  59.0750639      0.1820613       1.457508
Transmission.1   0.9977134   0.1820613      1.0000000       0.500000
Transmission.2  -3.4222295   1.4575084      0.5000000       1.000000
Transmission.3  -1.5187223   2.1538121      0.5000000       0.500000
               Transmission.3
Age                 -1.518722
SqCD4                2.153812
Transmission.1       0.500000
Transmission.2       0.500000
Transmission.3       1.000000
Processing gender: F
Running MCMC sampler.
No clustering, using functions for single level imputation.
Found  2 continuous outcomes and  1 categorical. Using function jomo1mix. 
"
    7 × locator resolved to <div id="run-log-content" data-dash-is-loading="true">[17:51:04] Starting adjustments...↵Loaded data: 1…</div>
      - unexpected value "[17:51:04] Starting adjustments...
Loaded data: 11575 rows, 27 columns
Initializing Python environment...
Python environment initialized successfully
Preprocessing data (computing derived columns)...

Running JOMO imputation (nimp=5, nburn=1000, nbetween=500, nsdf=4, imputeRD=False)...

Processing gender: M
Running MCMC sampler.
No clustering, using functions for single level imputation.
Found  2 continuous outcomes and  1 categorical. Using function jomo1mix. 
Performing imputation.
Number of burn-in iterations set to 10 for the actual imputation.
No clustering, using functions for single level imputation.
Found  2 continuous outcomes and  1 categorical. Using function jomo1mix. 
First imputation registered. 
.....Imputation number  2 registered 
.....Imputation number  3 registered 
.....Imputation number  4 registered 
.....Imputation number  5 registered 
The posterior mean of the fixed effects estimates is:
                     AIDS  Intercept SplineKnot.1 SplineKnot.2 SplineKnot.3
Age             4.1221020 28.0657283    6.2644486    5.8107389    6.2378169
SqCD4          -9.0729293 24.2829657    2.1871468    1.9321242    7.1942779
Transmission.1  0.7011802 -1.8379604    1.3231842    0.7862333    2.9926422
Transmission.2  0.5685153 -1.5326488    0.3621680    0.2343638    2.3322868
Transmission.3  0.2826234  0.7390355   -0.5890692   -0.3804071   -0.5247892
               SplineKnot.4
Age              5.34609895
SqCD4            1.63301272
Transmission.1  -0.06479251
Transmission.2  -0.88448791
Transmission.3  -0.36888926
The posterior covariance matrix is:
                       Age       SqCD4 Transmission.1 Transmission.2
Age            126.3735894 -16.1261313      0.9977134      -3.422230
SqCD4          -16.1261313  59.0750639      0.1820613       1.457508
Transmission.1   0.9977134   0.1820613      1.0000000       0.500000
Transmission.2  -3.4222295   1.4575084      0.5000000       1.000000
Transmission.3  -1.5187223   2.1538121      0.5000000       0.500000
               Transmission.3
Age                 -1.518722
SqCD4                2.153812
Transmission.1       0.500000
Transmission.2       0.500000
Transmission.3       1.000000
Processing gender: F
Running MCMC sampler.
No clustering, using functions for single level imputation.
Found  2 continuous outcomes and  1 categorical. Using function jomo1mix. 
"
    15 × locator resolved to <div id="run-log-content">[17:51:04] Starting adjustments...↵Loaded data: 1…</div>
       - unexpected value "[17:51:04] Starting adjustments...
Loaded data: 11575 rows, 27 columns
Initializing Python environment...
Python environment initialized successfully
Preprocessing data (computing derived columns)...

Running JOMO imputation (nimp=5, nburn=1000, nbetween=500, nsdf=4, imputeRD=False)...

Processing gender: M
Running MCMC sampler.
No clustering, using functions for single level imputation.
Found  2 continuous outcomes and  1 categorical. Using function jomo1mix. 
Performing imputation.
Number of burn-in iterations set to 10 for the actual imputation.
No clustering, using functions for single level imputation.
Found  2 continuous outcomes and  1 categorical. Using function jomo1mix. 
First imputation registered. 
.....Imputation number  2 registered 
.....Imputation number  3 registered 
.....Imputation number  4 registered 
.....Imputation number  5 registered 
The posterior mean of the fixed effects estimates is:
                     AIDS  Intercept SplineKnot.1 SplineKnot.2 SplineKnot.3
Age             4.1221020 28.0657283    6.2644486    5.8107389    6.2378169
SqCD4          -9.0729293 24.2829657    2.1871468    1.9321242    7.1942779
Transmission.1  0.7011802 -1.8379604    1.3231842    0.7862333    2.9926422
Transmission.2  0.5685153 -1.5326488    0.3621680    0.2343638    2.3322868
Transmission.3  0.2826234  0.7390355   -0.5890692   -0.3804071   -0.5247892
               SplineKnot.4
Age              5.34609895
SqCD4            1.63301272
Transmission.1  -0.06479251
Transmission.2  -0.88448791
Transmission.3  -0.36888926
The posterior covariance matrix is:
                       Age       SqCD4 Transmission.1 Transmission.2
Age            126.3735894 -16.1261313      0.9977134      -3.422230
SqCD4          -16.1261313  59.0750639      0.1820613       1.457508
Transmission.1   0.9977134   0.1820613      1.0000000       0.500000
Transmission.2  -3.4222295   1.4575084      0.5000000       1.000000
Transmission.3  -1.5187223   2.1538121      0.5000000       0.500000
               Transmission.3
Age                 -1.518722
SqCD4                2.153812
Transmission.1       0.500000
Transmission.2       0.500000
Transmission.3       1.000000
Processing gender: F
Running MCMC sampler.
No clustering, using functions for single level imputation.
Found  2 continuous outcomes and  1 categorical. Using function jomo1mix. 
"
    8 × locator resolved to <div id="run-log-content">[17:51:04] Starting adjustments...↵Loaded data: 1…</div>
      - unexpected value "[17:51:04] Starting adjustments...
Loaded data: 11575 rows, 27 columns
Initializing Python environment...
Python environment initialized successfully
Preprocessing data (computing derived columns)...

Running JOMO imputation (nimp=5, nburn=1000, nbetween=500, nsdf=4, imputeRD=False)...

Processing gender: M
Running MCMC sampler.
No clustering, using functions for single level imputation.
Found  2 continuous outcomes and  1 categorical. Using function jomo1mix. 
Performing imputation.
Number of burn-in iterations set to 10 for the actual imputation.
No clustering, using functions for single level imputation.
Found  2 continuous outcomes and  1 categorical. Using function jomo1mix. 
First imputation registered. 
.....Imputation number  2 registered 
.....Imputation number  3 registered 
.....Imputation number  4 registered 
.....Imputation number  5 registered 
The posterior mean of the fixed effects estimates is:
                     AIDS  Intercept SplineKnot.1 SplineKnot.2 SplineKnot.3
Age             4.1221020 28.0657283    6.2644486    5.8107389    6.2378169
SqCD4          -9.0729293 24.2829657    2.1871468    1.9321242    7.1942779
Transmission.1  0.7011802 -1.8379604    1.3231842    0.7862333    2.9926422
Transmission.2  0.5685153 -1.5326488    0.3621680    0.2343638    2.3322868
Transmission.3  0.2826234  0.7390355   -0.5890692   -0.3804071   -0.5247892
               SplineKnot.4
Age              5.34609895
SqCD4            1.63301272
Transmission.1  -0.06479251
Transmission.2  -0.88448791
Transmission.3  -0.36888926
The posterior covariance matrix is:
                       Age       SqCD4 Transmission.1 Transmission.2
Age            126.3735894 -16.1261313      0.9977134      -3.422230
SqCD4          -16.1261313  59.0750639      0.1820613       1.457508
Transmission.1   0.9977134   0.1820613      1.0000000       0.500000
Transmission.2  -3.4222295   1.4575084      0.5000000       1.000000
Transmission.3  -1.5187223   2.1538121      0.5000000       0.500000
               Transmission.3
Age                 -1.518722
SqCD4                2.153812
Transmission.1       0.500000
Transmission.2       0.500000
Transmission.3       1.000000
Processing gender: F
Running MCMC sampler.
No clustering, using functions for single level imputation.
Found  2 continuous outcomes and  1 categorical. Using function jomo1mix. 
Performing imputation.
Number of burn-in iterations set to 10 for the actual imputation.
No clustering, using functions for single level imputation.
Found  2 continuous outcomes and  1 categorical. Using function jomo1mix. 
First imputation registered. 
"

```

```yaml
- text: "[17:51:04] Starting adjustments... Loaded data: 11575 rows, 27 columns Initializing Python environment... Python environment initialized successfully Preprocessing data (computing derived columns)... Running JOMO imputation (nimp=5, nburn=1000, nbetween=500, nsdf=4, imputeRD=False)... Processing gender: M Running MCMC sampler. No clustering, using functions for single level imputation. Found 2 continuous outcomes and 1 categorical. Using function jomo1mix. Performing imputation. Number of burn-in iterations set to 10 for the actual imputation. No clustering, using functions for single level imputation. Found 2 continuous outcomes and 1 categorical. Using function jomo1mix. First imputation registered. .....Imputation number 2 registered .....Imputation number 3 registered .....Imputation number 4 registered .....Imputation number 5 registered The posterior mean of the fixed effects estimates is: AIDS Intercept SplineKnot.1 SplineKnot.2 SplineKnot.3 Age 4.1221020 28.0657283 6.2644486 5.8107389 6.2378169 SqCD4 -9.0729293 24.2829657 2.1871468 1.9321242 7.1942779 Transmission.1 0.7011802 -1.8379604 1.3231842 0.7862333 2.9926422 Transmission.2 0.5685153 -1.5326488 0.3621680 0.2343638 2.3322868 Transmission.3 0.2826234 0.7390355 -0.5890692 -0.3804071 -0.5247892 SplineKnot.4 Age 5.34609895 SqCD4 1.63301272 Transmission.1 -0.06479251 Transmission.2 -0.88448791 Transmission.3 -0.36888926 The posterior covariance matrix is: Age SqCD4 Transmission.1 Transmission.2 Age 126.3735894 -16.1261313 0.9977134 -3.422230 SqCD4 -16.1261313 59.0750639 0.1820613 1.457508 Transmission.1 0.9977134 0.1820613 1.0000000 0.500000 Transmission.2 -3.4222295 1.4575084 0.5000000 1.000000 Transmission.3 -1.5187223 2.1538121 0.5000000 0.500000 Transmission.3 Age -1.518722 SqCD4 2.153812 Transmission.1 0.500000 Transmission.2 0.500000 Transmission.3 1.000000 Processing gender: F Running MCMC sampler. No clustering, using functions for single level imputation. Found 2 continuous outcomes and 1 categorical. Using function jomo1mix. Performing imputation. Number of burn-in iterations set to 10 for the actual imputation. No clustering, using functions for single level imputation. Found 2 continuous outcomes and 1 categorical. Using function jomo1mix. First imputation registered."
```

# Test source

```ts
  1  | import { expect,Page } from "@playwright/test";
  2  | 
  3  | export class Adjustments{
  4  | 
  5  |     readonly page: Page
  6  | 
  7  |     constructor(page: Page){
  8  |         this.page = page
  9  |     }
  10 | 
  11 |     async applyRegrouping(){
  12 |         await this.page.locator('#apply-regrouping-btn').click();
  13 |     }
  14 | 
  15 |     caseBaseDataAdjustmentsText(){
  16 |         return this.page.getByText('Case-base data adjustments parameters')
  17 |     }
  18 | 
  19 |     multipleImputationListOptions(){
  20 |         return this.page.locator('#imputation-radio')
  21 |     }
  22 | 
  23 |     reportingDelaysOptions(){
  24 |         return this.page.locator('#delays-radio')
  25 |     }
  26 | 
  27 |     async checkImputationListOptions(option: 'None'|'Joint Modelling - JOMO'|'Chained Equations - MICE'){
  28 |         await this.multipleImputationListOptions().getByRole('option', {name: option}).check()
  29 |     }
  30 | 
  31 |     async checkReportingDelaysOptions(option: 'None'|'Without trend'|'With trend'){
  32 |         await this.reportingDelaysOptions().getByRole('option', {name: option}).check()
  33 |     }
  34 | 
  35 |     //Joing Modelling - JOMO & Chained Equations - MICE slider
  36 |     slider(){
  37 |         return this.page.locator('span[role="slider"]')
  38 |     }
  39 | 
  40 |     //Joing Modelling - JOMO & Chained Equations - MICE slider input value
  41 |     sliderMaxInput(){
  42 |         return this.page.locator('.dash-range-slider-max-input').inputValue()
  43 |     }
  44 | 
  45 |     async runAdjustments(){
  46 |         await this.page.getByRole('tab', {name: 'Run'}).click()
  47 |         await this.page.locator('#run-adjustments-button').click()
> 48 |         await expect(this.page.locator('#run-log-content')).toContainText('Adjustments completed successfully!',{timeout: 220000})
     |                                                             ^ Error: expect(locator).toContainText(expected) failed
  49 |     }
  50 | 
  51 |     async setNumberOfImputations(value: number){
  52 |         await this.page.locator('#jomo-nimp').clear()
  53 |         await this.page.locator('#jomo-nimp').fill(value.toString())
  54 |     }
  55 | 
  56 | }
```
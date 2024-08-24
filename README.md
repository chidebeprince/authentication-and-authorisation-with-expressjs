# **Authentication and Authorisation with expressjs**



## Authentication and athorisation:

Authentication verifies the identity of a user, it ensures that the user is who they calim to be. It relies of credentials such as passwords, biometric scan, or other factor to validate identity. Authorisation on the other hand, determines the level of access a user or should have. It grants or denies permissions to specific resourses or functions. It is important to note that authorisation can only come after authentication is complete.

You can think of authentication as having the correct key to unlock a door (proving identitiy), and authorisation as the permission to access specific areas once inside (granting access).


## Is the "delete user functionality after authentication" a good idea?:

Based on the knowledge we've gained, implementing the delete user functionality after authentication is a good idea,  Deleting a user should happen only after verifying their identity (authentication). Otherwise, anyone could potentially delete accounts. 

Furthermore, after authentication, the authenticated user should only be allowed (authorised) to delete their own account. The authenticated user should not be given authorisation to delete any other account seeing they do not have ownership of that account.
